<script lang="ts" setup>
import { defineComponent, ref, watchEffect } from "vue"
import remarkEmoji from "remark-emoji"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkSqueezeParagraphs from "remark-squeeze-paragraphs"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"

const processor = unified()
  .use(remarkParse)
  .use(remarkEmoji)
  .use(remarkRehype)
  .use(remarkSqueezeParagraphs)
  .use(remarkGfm)
  .use(rehypeHighlight)
  .use(rehypeStringify)

const props = defineProps({
  md: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    default: "TODO-uid",
  },
})

const parsedMarkdown = ref(props.md)

watchEffect(async () => {
  try {
    const a = processor.processSync(props.md || "...")
    console.log("a--->", String(a))
    parsedMarkdown.value = a
    console.log(parsedMarkdown.value)
  } catch (err) {
    console.error(err)
    parsedMarkdown.value = ""
  }
})
</script>
<template>
  <ClientOnly>
    <div class="markdown-body" v-html="parsedMarkdown"></div>
  </ClientOnly>
</template>
