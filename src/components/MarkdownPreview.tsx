// MarkdownRenderer.tsx
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
// import remarkSqueezeParagraphs from "remark-squeeze-paragraphs"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import rehypeSanitize from "rehype-sanitize"
import { ClientOnly } from "#components"

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  // .use(remarkEmoji)
  // .use(remarkSqueezeParagraphs)
  .use(rehypeHighlight)
  .use(rehypeSanitize)
  .use(rehypeStringify)

export default defineComponent({
  props: {
    md: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const parsedMarkdown = ref(props.md)

    const throttleParse = useThrottleFn(
      (s: string) => {
        const a = processor.processSync(s)
        parsedMarkdown.value = String(a)
      },
      80,
      true,
      true,
    )

    watchEffect(async () => {
      try {
        await throttleParse(props.md || "...")
      } catch (err) {
        parsedMarkdown.value = ""
      }
    })

    return () => (
      <ClientOnly>
        <div class="markdown-body w-full overflow-scroll" innerHTML={parsedMarkdown.value}></div>
      </ClientOnly>
    )
  },
})
