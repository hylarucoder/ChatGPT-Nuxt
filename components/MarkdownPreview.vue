<template>
  <ContentRenderer class="markdown-body" :value="parsedMarkdown" />
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

  // init
  setup(props) {
    const parsedMarkdown = ref("")

    watchEffect(async () => {
      try {
        parsedMarkdown.value = await markdownParser.parse(props.cid, props.md)
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
