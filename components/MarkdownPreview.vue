<template>
  <ContentRenderer :value="parsedMarkdown" />
</template>

<script>
import { defineComponent } from "vue"

import markdownParser from "@nuxt/content/transformers/markdown"

export default defineComponent({
  components: {},

  // define props
  props: {
    md: {
      type: String,
      default: "",
    },
    cid: {
      type: String,
      default: "<some-id>",
    },
  },

  // init
  async setup(props) {
    return {
      parsedMarkdown: await markdownParser.parse(props.cid, props.md),
    }
  },
})
</script>
