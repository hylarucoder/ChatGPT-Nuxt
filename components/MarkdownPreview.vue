<script lang="ts" setup>
import { defineComponent, ref, watchEffect } from "vue"
import markdownParser from "@nuxt/content/transformers/markdown"

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
    parsedMarkdown.value = await markdownParser.parse(props.cid, props.md || "...")
    console.log(parsedMarkdown.value)
  } catch (err) {
    console.error(err)
    parsedMarkdown.value = ""
  }
})
</script>
<template>
  <ClientOnly>
    <ContentRenderer class="markdown-body" :value="parsedMarkdown" />
  </ClientOnly>
</template>
