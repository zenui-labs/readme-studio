<script setup lang="ts">
import {nextTick, ref, watch} from 'vue'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits<{
  'update:content': [content: string]
  'cursor-position': [position: number]
}>()

const localContent = ref(props.content)
const textareaRef = ref<HTMLTextAreaElement>()
const cursorPosition = ref(0)

watch(() => props.content, (newContent) => {
  if (newContent !== localContent.value) {
    localContent.value = newContent
  }
})

let debounceTimer: number | null = null

const handleInput = () => {
  updateCursorPosition()

  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    emit('update:content', localContent.value)
  }, 200)
}

const updateCursorPosition = () => {
  if (textareaRef.value) {
    cursorPosition.value = textareaRef.value.selectionStart
    emit('cursor-position', cursorPosition.value)
  }
}

const handleSelectionChange = () => {
  updateCursorPosition()
}

const insertTextAtCursor = (text: string) => {
  if (!textareaRef.value) return

  const textarea = textareaRef.value
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  const before = localContent.value.substring(0, start)
  const after = localContent.value.substring(end)
  localContent.value = before + text + after

  nextTick(() => {
    const newPosition = start + text.length
    textarea.selectionStart = newPosition
    textarea.selectionEnd = newPosition
    textarea.focus()
    updateCursorPosition()
  })

  handleInput()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Tab') {
    event.preventDefault()

    const textarea = event.target as HTMLTextAreaElement
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    const tabChar = '  '

    if (start === end) {
      insertTextAtCursor(tabChar)
    } else {
      const selectedText = localContent.value.substring(start, end)
      const lines = selectedText.split('\n')

      if (event.shiftKey) {
        const unindentedLines = lines.map(line =>
            line.startsWith(tabChar) ? line.substring(tabChar.length) : line
        )
        const newText = unindentedLines.join('\n')

        localContent.value = localContent.value.substring(0, start) + newText + localContent.value.substring(end)

        setTimeout(() => {
          textarea.selectionStart = start
          textarea.selectionEnd = start + newText.length
        }, 0)
      } else {
        const indentedLines = lines.map(line => tabChar + line)
        const newText = indentedLines.join('\n')

        localContent.value = localContent.value.substring(0, start) + newText + localContent.value.substring(end)

        setTimeout(() => {
          textarea.selectionStart = start
          textarea.selectionEnd = start + newText.length
        }, 0)
      }
    }

    handleInput()
  } else if (event.key === 'Enter') {
    const textarea = event.target as HTMLTextAreaElement
    const start = textarea.selectionStart
    const currentLine = localContent.value.substring(0, start).split('\n').pop() || ''

    const listMatch = currentLine.match(/^(\s*)([-*+]|\d+\.)\s/)
    if (listMatch) {
      event.preventDefault()
      const indent = listMatch[1]
      const bullet = listMatch[2]

      let newBullet = bullet
      if (bullet.match(/\d+\./)) {
        const num = parseInt(bullet) + 1
        newBullet = `${num}.`
      }

      const newLine = `\n${indent}${newBullet} `
      insertTextAtCursor(newLine)
    }
  }
}

defineExpose({
  insertTextAtCursor,
  focus: () => textareaRef.value?.focus(),
  getCursorPosition: () => cursorPosition.value
})
</script>

<template>
  <div class="flex-1 lg:border-r dark:border-darkBorder border-gray-200 flex flex-col">
    <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
      <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
        Editor
      </h3>
    </div>

    <div class="flex-1 p-4">
      <textarea
          ref="textareaRef"
          v-model="localContent"
          @input="handleInput"
          @keydown="handleKeydown"
          @click="handleSelectionChange"
          @keyup="handleSelectionChange"
          class="w-full lg:h-full p-4 h-[500px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-darkBorder rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent font-mono text-sm text-gray-800 dark:text-gray-200 transition-all duration-200 leading-relaxed"
          placeholder="Write your markdown here or use the component library to get started...

Tips:
• Use Tab/Shift+Tab to indent/unindent
• Press Enter in lists to continue them
• Components will be inserted at your cursor position"
          spellcheck="false"
      ></textarea>
    </div>
  </div>
</template>

<style scoped>
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

textarea {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

textarea {
  font-feature-settings: "liga" 0, "calt" 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

textarea:dark::placeholder {
  color: #6b7280;
}
</style>