<script setup lang="ts">
const props = defineProps<{
  markdown: string
}>()
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div class="p-4 py-4.5 border-b border-gray-200 dark:border-darkBorder">
      <h3 class="text-base font-semibold text-gray-800 dark:text-darkSubtext flex items-center gap-2">
        Preview
      </h3>
    </div>

    <div class="flex-1 overflow-y-auto p-4">
      <div class="markdown-container h-[500px] bg-white dark:bg-[#0f172a] overflow-y-auto w-full lg:h-full rounded-lg p-4 dark:prose-invert">
        <div
            class="markdown-body"
            v-html="markdown"
        ></div>

        <!-- Empty state -->
        <div
            v-if="!markdown"
            class="flex items-center justify-center h-full text-gray-500 dark:text-gray-400 text-center"
        >
          <div>
            <div class="text-4xl mb-4">📝</div>
            <p class="text-lg font-medium mb-2">Start writing your README</p>
            <p class="text-sm">Use the editor or add components from the library</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for preview */
.markdown-container::-webkit-scrollbar {
  width: 8px;
}

.markdown-container::-webkit-scrollbar-track {
  background: transparent;
}

.markdown-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.markdown-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark .markdown-container::-webkit-scrollbar-thumb {
  background: #475569;
}

.dark .markdown-container::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}
</style>

<!-- Enhanced global styles for markdown content -->
<style>
.markdown-container .markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 100%;
  margin: 0;
  text-align: left !important;
  font-size: 16px;
  line-height: 1.6;
  word-wrap: break-word;
}

/* Enhanced heading styles */
.markdown-container .markdown-body h1,
.markdown-container .markdown-body h2,
.markdown-container .markdown-body h3,
.markdown-container .markdown-body h4,
.markdown-container .markdown-body h5,
.markdown-container .markdown-body h6 {
  text-align: left !important;
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-container .markdown-body h1 {
  font-size: 2em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

.markdown-container .markdown-body h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}

/* Paragraph and text styles */
.markdown-container .markdown-body p {
  text-align: left !important;
  margin-bottom: 16px;
}

/* List styles */
.markdown-container .markdown-body ul,
.markdown-container .markdown-body ol {
  text-align: left !important;
  padding-left: 2em;
  margin-bottom: 16px;
}

.markdown-container .markdown-body li {
  text-align: left !important;
  margin-bottom: 0.25em;
}

/* Blockquote styles */
.markdown-container .markdown-body blockquote {
  text-align: left !important;
  margin: 0 0 16px 0;
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
}

/* Code and pre styles */
.markdown-container .markdown-body pre {
  text-align: left !important;
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 6px;
  margin-bottom: 16px;
}

.markdown-container .markdown-body code {
  text-align: left !important;
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 3px;
  font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
}

.markdown-container .markdown-body pre code {
  background-color: transparent;
  padding: 0;
}

/* Table styles */
.markdown-container .markdown-body table {
  text-align: left !important;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 16px;
  display: block;
  overflow: auto;
}

.markdown-container .markdown-body td,
.markdown-container .markdown-body th {
  text-align: left !important;
  padding: 6px 13px;
  border: 1px solid #dfe2e5;
}

.markdown-container .markdown-body th {
  font-weight: 600;
  background-color: #f6f8fa;
}

/* Image styles */
.markdown-container .markdown-body img {
  max-width: 100%;
  height: auto;
  margin: 16px 0;
  border-radius: 6px;
}

/* Link styles */
.markdown-container .markdown-body a {
  color: #0366d6;
  text-decoration: none;
}

.markdown-container .markdown-body a:hover {
  text-decoration: underline;
}

/* Horizontal rule */
.markdown-container .markdown-body hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: #e1e4e8;
  border: 0;
}

/* Badge and shield styles (common in GitHub READMEs) */
.markdown-container .markdown-body img[src*="shields.io"],
.markdown-container .markdown-body img[src*="badge"] {
  display: inline-block;
  margin: 2px;
  vertical-align: middle;
}

/* Center align divs - This is crucial for GitHub README formatting */
.markdown-container .markdown-body div[align="center"] {
  text-align: center !important;
}

.markdown-container .markdown-body div[align="center"] * {
  text-align: center !important;
}

.markdown-container .markdown-body div[align="center"] p,
.markdown-container .markdown-body div[align="center"] div,
.markdown-container .markdown-body div[align="center"] img {
  text-align: center !important;
  margin-left: auto;
  margin-right: auto;
}

/* Support for HTML attributes from markdown-it-attrs */
.markdown-container .markdown-body [align="center"] {
  text-align: center !important;
}

.markdown-container .markdown-body [align="left"] {
  text-align: left !important;
}

.markdown-container .markdown-body [align="right"] {
  text-align: right !important;
}

/* Container support for markdown-it-container */
.markdown-container .markdown-body .center {
  text-align: center !important;
}

/* Dark mode styles */
.dark .markdown-container .markdown-body {
  background-color: #0f172a;
  color: #f1f5f9;
  border-radius: 12px !important;
  padding: 20px !important;
}

.dark .markdown-container .markdown-body h1,
.dark .markdown-container .markdown-body h2 {
  border-bottom-color: #30363d;
}

.dark .markdown-container .markdown-body pre {
  background-color: #1e293b;
  color: #e2e8f0;
}

.dark .markdown-container .markdown-body code {
  background-color: rgba(255, 255, 255, 0.1);
  color: #facc15;
}

.dark .markdown-container .markdown-body blockquote {
  border-left-color: #334155;
  color: #cbd5e1;
}

.dark .markdown-container .markdown-body tr table th {
  background-color: #1e293b;
  color: #e2e8f0;
  border-color: #30363d;
}

.dark .markdown-body table tbody tr {
  background-color: #141b27;
  color: #e2e8f0;
  border-color: #30363d;
}

.dark .markdown-container .markdown-body table td {
  border-color: #30363d;
}

.dark .markdown-container .markdown-body a {
  color: #58a6ff;
}

.dark .markdown-container .markdown-body hr {
  background-color: #30363d;
}

/* Fix for HTML content rendering */
.markdown-container .markdown-body div,
.markdown-container .markdown-body span,
.markdown-container .markdown-body section,
.markdown-container .markdown-body article {
  display: block;
}

.markdown-container .markdown-body br {
  display: block;
  margin: 8px 0;
  content: " ";
}

/* Enhanced support for GitHub README common patterns */
.markdown-container .markdown-body p img:only-child {
  display: block;
  margin: 0 auto;
}
</style>