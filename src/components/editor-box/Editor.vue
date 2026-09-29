<script setup lang="ts">
import {ref} from 'vue'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits<{
  'update:content': [content: string]
  'cursor-position': [position: number]
}>()

const textareaRef = ref<HTMLTextAreaElement>()
// Until the user places the caret, inserted blocks go to the end, not the top.
const hasCaret = ref(false)

const handleInput = (event: Event) => {
  emit('update:content', (event.target as HTMLTextAreaElement).value)
  updateCursorPosition()
}

const updateCursorPosition = () => {
  if (textareaRef.value) emit('cursor-position', textareaRef.value.selectionStart)
}

const handleSelectionChange = () => {
  hasCaret.value = true
  updateCursorPosition()
}

// Edits go through the browser's own editing command so Ctrl+Z / Ctrl+Y keep working.
// The resulting input event syncs the new text to the parent.
const replaceRange = (start: number, end: number, text: string, selectInserted = false) => {
  const textarea = textareaRef.value
  if (!textarea) return

  textarea.focus()
  textarea.setSelectionRange(start, end)
  const inserted = text
      ? document.execCommand('insertText', false, text)
      : document.execCommand('delete')
  if (!inserted) {
    textarea.setRangeText(text, start, end, 'end')
    textarea.dispatchEvent(new Event('input', {bubbles: true}))
  }
  if (selectInserted) textarea.setSelectionRange(start, start + text.length)
  hasCaret.value = true
  updateCursorPosition()
}

// Inserts a block (library element) on its own lines at the caret.
const insertBlockAtCursor = (block: string) => {
  const textarea = textareaRef.value
  if (!textarea) return

  const value = textarea.value
  const start = hasCaret.value ? textarea.selectionStart : value.length
  const end = hasCaret.value ? textarea.selectionEnd : value.length
  const before = value.slice(0, start)
  const after = value.slice(end)

  const lead = !before || before.endsWith('\n\n') ? '' : before.endsWith('\n') ? '\n' : '\n\n'
  const body = block.replace(/\s+$/, '')
  const trail = !after ? '\n' : after.startsWith('\n\n') ? '' : after.startsWith('\n') ? '\n' : '\n\n'
  replaceRange(start, end, lead + body + trail)
}

const handleKeydown = (event: KeyboardEvent) => {
  const textarea = event.target as HTMLTextAreaElement
  const {selectionStart: start, selectionEnd: end, value} = textarea

  if (event.key === 'Tab') {
    event.preventDefault()
    const tab = '  '

    if (start === end && !event.shiftKey) {
      replaceRange(start, end, tab)
      return
    }

    // Indent or unindent every selected line.
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const lines = value.slice(lineStart, end).split('\n')
    const changed = lines
        .map(line => event.shiftKey ? line.replace(/^ {1,2}/, '') : tab + line)
        .join('\n')
    replaceRange(lineStart, end, changed, true)
  } else if (event.key === 'Enter' && !event.shiftKey && start === end) {
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const line = value.slice(lineStart, start)
    const match = line.match(/^(\s*)([-*+]|\d+\.)\s(\[[ xX]\]\s)?/)
    if (!match) return

    event.preventDefault()
    // Enter on an empty list item ends the list.
    if (line.length === match[0].length) {
      replaceRange(lineStart, start, '')
      return
    }

    const [, indent, bullet, task] = match
    const next = /\d+\./.test(bullet) ? `${parseInt(bullet) + 1}.` : bullet
    replaceRange(start, end, `\n${indent}${next} ${task ? '[ ] ' : ''}`)
  }
}

defineExpose({
  insertBlockAtCursor,
  focus: () => textareaRef.value?.focus(),
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
          :value="props.content"
          @input="handleInput"
          @keydown="handleKeydown"
          @click="handleSelectionChange"
          @keyup="handleSelectionChange"
          @select="handleSelectionChange"
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

.dark textarea::placeholder {
  color: #6b7280;
}
</style>