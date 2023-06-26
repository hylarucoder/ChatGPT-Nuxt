import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkGfm from "remark-gfm"
import rehypeVue from "./rehype-vue"
import { h } from "vue"

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeVue, {
  createElement: h,
})

export default processor
