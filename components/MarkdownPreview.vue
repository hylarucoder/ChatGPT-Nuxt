<template>
  <ClientOnly>
    <ContentRenderer class="markdown-body" :value="parsedMarkdown" />
  </ClientOnly>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue"
import markdownParser from "@nuxt/content/transformers/markdown"

export default defineComponent({
  // define props
  props: {
    md: {
      type: String,
      required: true,
    },
    cid: {
      type: String,
      default: "TODO-uid",
    },
  },

  setup(props) {
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

    return {
      parsedMarkdown,
    }
  },
})
</script>
