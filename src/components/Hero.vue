<script setup lang="ts">
import {computed, nextTick, onMounted, onUnmounted, ref, watch} from 'vue'
import {ArrowRight, ChevronDown, Download, Expand, FilePenLine, Search, Sparkles} from "lucide-vue-next";
import {useRouter} from "vue-router";
import {useStore} from "@stores/useStore";
import {PATHS} from "@/constants/paths";
import {renderMarkdown} from "@utils/markdown";
import {parseOutline} from "@utils/readmeOutline";
import {readmeTemplates} from "@/data/template-data";
import {ReadmeSections} from "@/data/readme-sections";

const store = useStore()
const router = useRouter()

const animatedTexts = ['READMEs', 'Profiles', 'Projects']
const currentTextIndex = ref(0)

// Numbers count up once when the hero appears.
const countProgress = ref(0)
const statDefs = [
  {value: readmeTemplates.length, suffix: '+', label: 'templates'},
  {value: ReadmeSections.length, suffix: '+', label: 'editor elements'},
  {value: 100, suffix: '%', label: 'free'},
]
const stats = computed(() => statDefs.map(stat => ({
  ...stat,
  display: `${Math.round(stat.value * countProgress.value)}${stat.suffix}`,
})))

function countUp() {
  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / 1400)
    countProgress.value = 1 - Math.pow(1 - t, 3)
    if (t < 1 && alive) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// Demo of the real editor: an element is clicked in the library, its markdown
// is typed into the editor, and the preview renders it live.
const LIBRARY_IDS = ['title', 'badges', 'alert-tip', 'features', 'installation', 'task-list', 'skill-icons', 'github-stats']
const library = LIBRARY_IDS
    .map(id => ReadmeSections.find(section => section.id === id))
    .filter((section): section is NonNullable<typeof section> => Boolean(section))

const DEMO_STEPS = [
  {id: 'title', text: '# 🚀 Nebula UI\n\nA lightning-fast component library for **modern web apps**.\n\n'},
  {id: 'alert-tip', text: '> [!TIP]\n> Install in seconds and ship today.\n\n'},
  {id: 'features', text: '## ✨ Features\n\n- ⚡ **Fast** - tiny bundle, zero runtime\n- 🎨 **Themeable** - light and dark out of the box\n- ♿ **Accessible** - WAI-ARIA compliant\n\n'},
  {id: 'installation', text: '## 📦 Installation\n\n```bash\nnpm install nebula-ui\n```\n'},
]

const demoText = ref('')
const activeId = ref<string | null>(null)
const pressedId = ref<string | null>(null)
const demoHtml = computed(() => renderMarkdown(demoText.value, store.isDarkMode))
const demoSections = computed(() => parseOutline(demoText.value).length)

const editorPane = ref<HTMLElement>()
const previewPane = ref<HTMLElement>()

watch(demoText, async () => {
  await nextTick()
  for (const pane of [editorPane.value, previewPane.value]) {
    if (pane) pane.scrollTop = pane.scrollHeight
  }
})

let alive = true
let textInterval: ReturnType<typeof setInterval> | undefined
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function runDemo() {
  while (alive) {
    demoText.value = ''
    for (const step of DEMO_STEPS) {
      if (!alive) return
      activeId.value = step.id
      await sleep(650)
      pressedId.value = step.id
      await sleep(180)
      pressedId.value = null
      for (let i = 0; i < step.text.length && alive; i += 2) {
        demoText.value += step.text.slice(i, i + 2)
        await sleep(22)
      }
      activeId.value = null
      await sleep(450)
    }
    await sleep(3500)
  }
}

function handleCreateReadme() {
  store.setGeneratedReadme('')
  router.push(PATHS.EDITOR)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    countProgress.value = 1
    demoText.value = DEMO_STEPS.map(step => step.text).join('')
    return
  }
  countUp()
  textInterval = setInterval(() => {
    currentTextIndex.value = (currentTextIndex.value + 1) % animatedTexts.length
  }, 2600)
  runDemo()
})

onUnmounted(() => {
  alive = false
  clearInterval(textInterval)
})
</script>

<template>
  <section class="relative w-full overflow-hidden bg-white dark:bg-darkBg pt-[120px] md:pt-[150px] pb-20 md:pb-28">

    <!-- Background: grid faded at the navbar, both sides and the bottom, plus soft glows -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="hero-grid absolute inset-0"></div>
      <div class="hero-glow absolute -top-48 left-1/2 -ml-[450px] h-[500px] w-[900px] rounded-full bg-brandColor/20 dark:bg-brandColor/[0.09] blur-[120px]"></div>
      <div class="hero-glow hero-glow-delay absolute top-48 -left-48 h-[340px] w-[340px] rounded-full bg-sky-400/15 dark:bg-sky-500/[0.06] blur-[110px]"></div>
      <div class="hero-glow absolute top-80 -right-48 h-[360px] w-[360px] rounded-full bg-violet-400/15 dark:bg-violet-500/[0.06] blur-[110px]"></div>
    </div>

    <div class="relative z-10 mx-auto w-full max-w-[1200px] px-6 text-center">

      <router-link
          :to="PATHS.CHANGELOG"
          class="hero-display group inline-flex items-center gap-2 rounded-full border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md pl-1.5 pr-3.5 py-1.5 text-[0.85rem] text-gray-700 dark:text-darkSubtext hover:border-brandColor/50 transition-colors duration-300"
      >
        <span class="inline-flex items-center gap-1 rounded-full bg-brandColor px-2 py-0.5 text-[0.75rem] font-semibold text-white">
          <Sparkles :size="12"/> New
        </span>
        v1.1 is here: smarter AI, 15 new templates
        <ArrowRight :size="14" class="transition-transform duration-300 group-hover:translate-x-0.5"/>
      </router-link>

      <h1 class="hero-display mx-auto mt-8 max-w-[980px] text-[2.25rem] leading-[1.08] sm:text-[3.6rem] md:text-[5rem] md:leading-[1.02] font-extrabold tracking-[-0.04em] text-gray-900 dark:text-darkText">
        Craft stunning GitHub<br/>
        <!-- Every word sits in one grid cell; hidden copies reserve the widest width so the line never reflows -->
        <span class="inline-grid justify-items-end align-baseline">
          <span
              v-for="word in animatedTexts"
              :key="word"
              aria-hidden="true"
              class="hero-accent invisible col-start-1 row-start-1"
          >{{ word }}</span>
          <Transition name="text-change" mode="out-in" type="transition">
            <span :key="currentTextIndex" class="hero-accent hero-gradient-text col-start-1 row-start-1">
              {{ animatedTexts[currentTextIndex] }}
            </span>
          </Transition>
        </span>
        in seconds
      </h1>

      <p class="hero-display mx-auto mt-7 max-w-[620px] text-[1.05rem] md:text-[1.2rem] leading-relaxed text-gray-600 dark:text-darkSubtext">
        Paste a GitHub link and let AI write a README that truly understands your project.
        Then polish every detail in a live editor.
      </p>

      <div class="hero-display mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <router-link
            :to="PATHS.GENERATOR"
            class="group inline-flex items-center gap-2.5 rounded-xl bg-brandColor px-7 py-3.5 text-[1.05rem] font-semibold text-white transition-all duration-300 hover:bg-[#00967f]"
        >
          <img src="/ai.svg" alt="" class="w-[20px]"/>
          Generate with AI
          <ArrowRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1"/>
        </router-link>
        <button
            @click="handleCreateReadme"
            class="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md px-7 py-3.5 text-[1.05rem] font-semibold text-gray-800 dark:text-darkText transition-all duration-300 hover:border-brandColor/60"
        >
          <FilePenLine :size="19"/>
          Start from scratch
        </button>
      </div>

      <div class="hero-display mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[0.9rem]">
        <template v-for="(stat, index) in stats" :key="stat.label">
          <span v-if="index" aria-hidden="true" class="h-4 w-px bg-gray-300 dark:bg-white/15"></span>
          <span class="flex items-baseline gap-1.5">
            <span class="font-semibold text-gray-900 dark:text-darkText tabular-nums">{{ stat.display }}</span>
            <span class="text-gray-500 dark:text-darkSubtext">{{ stat.label }}</span>
          </span>
        </template>
        <span aria-hidden="true" class="h-4 w-px bg-gray-300 dark:bg-white/15"></span>
        <a
            href="https://www.producthunt.com/products/readme-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-readme-studio"
            target="_blank" rel="noopener noreferrer"
        >
          <img
              :src="`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=996454&theme=${store.isDarkMode ? 'dark' : 'light'}`"
              alt="README Studio on Product Hunt"
              class="h-[34px] w-auto"
          />
        </a>
      </div>

      <!-- Editor demo, laid out like the real editor page -->
      <div class="hero-stage relative mx-auto mt-16 md:mt-20 max-w-[1120px] text-left" aria-label="Editor demo">
        <div class="hero-tilt">
          <div class="hero-float rounded-2xl border border-gray-200 dark:border-white/10 bg-white/85 dark:bg-darkCardBgColor/80 p-3 md:p-4 backdrop-blur-xl">

            <div class="mb-3 flex items-center justify-end gap-2.5">
              <span class="mr-auto flex items-center gap-1.5 pl-1">
                <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
                <span class="h-3 w-3 rounded-full bg-[#febc2e]"></span>
                <span class="h-3 w-3 rounded-full bg-[#28c840]"></span>
              </span>
              <span class="flex items-center gap-2 rounded-lg bg-brandColor px-3 py-1.5 text-[0.8rem] font-medium text-white">
                <Expand :size="14"/><span class="hidden sm:inline">Fullscreen Preview</span>
              </span>
              <span class="flex overflow-hidden rounded-lg text-[0.8rem] font-medium text-white">
                <span class="flex items-center gap-2 bg-brandColor px-3 py-1.5"><Download :size="14"/><span class="hidden sm:inline">Download</span></span>
                <span class="flex items-center bg-[#007f6c] px-2"><ChevronDown :size="14"/></span>
              </span>
            </div>

            <div class="flex h-[400px] md:h-[440px] overflow-hidden rounded-lg border border-gray-200 dark:border-darkBorder bg-gray-50 dark:bg-darkCardBgColor">
              <!-- Element library -->
              <div class="hidden lg:flex w-[250px] flex-shrink-0 flex-col border-r border-gray-200 dark:border-darkBorder">
                <div class="border-b border-gray-200 dark:border-darkBorder px-3 py-2.5">
                  <div class="w-max rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-darkBg p-[3px] text-[0.75rem] font-medium">
                    <span class="inline-block rounded-md bg-brandColor px-2.5 py-1 text-white">All Sections</span>
                    <span class="inline-block px-2.5 py-1 text-gray-600 dark:text-darkSubtext">Added Sections</span>
                  </div>
                </div>
                <div class="p-3">
                  <div class="mb-3 flex items-center gap-2 rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-gray-900 px-2.5 py-1.5 text-[0.75rem] text-gray-400">
                    <Search :size="13"/> Search elements...
                  </div>
                  <div class="grid grid-cols-2 gap-2">
                    <div
                        v-for="item in library"
                        :key="item.id"
                        :class="[
                          'flex flex-col items-center gap-1.5 rounded-lg border px-2 py-3 transition-all duration-200',
                          activeId === item.id
                            ? 'border-brandColor bg-brandColor/10'
                            : 'border-gray-100 dark:border-darkBorder bg-white dark:bg-gray-900',
                          pressedId === item.id ? 'scale-95' : 'scale-100',
                        ]"
                    >
                      <component :is="item.icon" :size="16" class="text-brandColor"/>
                      <span class="text-center text-[0.7rem] font-medium leading-tight text-gray-700 dark:text-gray-300">{{ item.name }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Markdown editor -->
              <div class="hidden md:flex flex-1 min-w-0 flex-col border-r border-gray-200 dark:border-darkBorder">
                <div class="border-b border-gray-200 dark:border-darkBorder px-4 py-3 text-[0.85rem] font-semibold text-gray-800 dark:text-darkSubtext">Editor</div>
                <div class="flex-1 min-h-0 p-3">
                  <div ref="editorPane" class="hero-scroll h-full overflow-y-auto rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-slate-900 p-3.5">
                    <pre class="whitespace-pre-wrap break-words font-mono text-[0.75rem] leading-relaxed text-gray-800 dark:text-gray-200">{{ demoText }}<span class="hero-caret">▍</span></pre>
                  </div>
                </div>
              </div>

              <!-- Live preview -->
              <div class="flex flex-1 min-w-0 flex-col">
                <div class="border-b border-gray-200 dark:border-darkBorder px-4 py-3 text-[0.85rem] font-semibold text-gray-800 dark:text-darkSubtext">Preview</div>
                <div class="flex-1 min-h-0 p-3">
                  <div ref="previewPane" class="hero-scroll h-full overflow-y-auto rounded-lg border border-gray-200 dark:border-darkBorder bg-white dark:bg-[#0d1117] p-4">
                    <div class="markdown-body hero-demo" v-html="demoHtml"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3 flex items-center justify-between rounded-lg border border-gray-200 dark:border-darkBorder bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-[0.75rem] text-gray-600 dark:text-gray-400">
              <span>{{ demoSections }} sections · {{ demoText.length }} characters</span>
              <span class="hidden sm:inline">💡 Tip: Elements are inserted at your cursor position</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* The global "*" font rule would override inherited fonts, so set it on every descendant. */
.hero-display,
.hero-display :deep(*) {
  font-family: var(--font-display);
}

.hero-display .hero-accent {
  font-family: var(--font-accent);
  font-style: italic;
  font-weight: 400;
  font-size: 1.08em;
  /* The gradient is clipped to the element box, and the tight headline
     line-height cuts off descenders (y, p, g) and the italic overhang.
     Extend the box with padding and cancel it with margins so layout is unchanged. */
  padding: 0.05em 0.14em 0.2em 0.06em;
  margin: -0.05em 0 -0.2em -0.06em;
  letter-spacing: -0.01em;
}

.hero-grid {
  --grid-line: rgba(15, 23, 42, 0.055);
  background-image: linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
  linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
  background-size: 48px 48px;
  background-position: center top;
  /* Fade out under the navbar, at both sides and toward the bottom. */
  mask-image: linear-gradient(to bottom, transparent 0, #000 160px, #000 55%, transparent 90%),
  linear-gradient(to right, transparent 0, #000 22%, #000 78%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-composite: source-in;
}

.dark .hero-grid {
  --grid-line: rgba(255, 255, 255, 0.035);
}

.hero-gradient-text {
  background-image: linear-gradient(95deg, #00AD95 10%, #0ea5c6 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.dark .hero-gradient-text {
  background-image: linear-gradient(95deg, #2dd4bf 10%, #5ec8e6 90%);
}

.hero-caret {
  color: #00AD95;
  animation: blink 1s steps(1) infinite;
}

.hero-demo {
  font-size: 13px;
}

.hero-demo :deep(h1) {
  margin-top: 0;
}

.hero-scroll {
  scrollbar-width: none;
}

.hero-scroll::-webkit-scrollbar {
  display: none;
}

.hero-glow {
  animation: drift 14s ease-in-out infinite alternate;
}

.hero-glow-delay {
  animation-delay: -7s;
}

/* Tilted "floating screenshot": 3D tilt on one layer, gentle bob on the other,
   so the hover straighten transition and the float animation never fight. */
.hero-stage {
  perspective: 2000px;
}

.hero-tilt {
  transform: rotateX(16deg) rotateZ(-2deg) scale(0.97);
  transform-origin: center top;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.hero-stage:hover .hero-tilt {
  transform: rotateX(0deg) rotateZ(0deg) scale(1);
}

.hero-float {
  animation: float 8s ease-in-out infinite;
}

@media (max-width: 767px) {
  .hero-tilt {
    transform: rotateX(10deg) scale(0.98);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(30px, 30px, 0) scale(1.08);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.text-change-enter-active,
.text-change-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
}

.text-change-enter-from {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(-14px);
}

.text-change-leave-to {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(14px);
}

@media (prefers-reduced-motion: reduce) {
  .hero-caret,
  .hero-glow,
  .hero-float {
    animation: none;
  }
}
</style>
