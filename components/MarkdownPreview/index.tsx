import processor from "./processor"
import { defineComponent } from "vue"

export default defineComponent({
  name: "MarkdownRenderer",
  props: {
    markdown: String,
  },
  setup(props) {
    try {
      const vnode = processor.processSync(props.markdown).result
      return () => vnode
    } catch (err) {
      console.error(err)
      return () => ""
    }
  },
})
