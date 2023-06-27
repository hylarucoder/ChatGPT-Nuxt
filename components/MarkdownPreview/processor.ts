import rehypeHighlight from "rehype-highlight"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import remarkGfm from "remark-gfm"
import rehypeVue from "./rehype-vue"
import { h } from "vue"

/**
 * Plugin to insert a button before the `code` element inside a `pre` element.
 *
 * @type {import("unified").Plugin<[Options?] | Array<void>, Root>}
 */
function rehypeInsertButton() {
  return (tree) => {
    function visit(node) {
      if (node.type === "element" && node.tagName === "pre") {
        const codeElementIndex = node.children.findIndex(
          (child) => child.type === "element" && child.tagName === "code"
        )

        if (codeElementIndex !== -1) {
          const button = {
            type: "element",
            tagName: "span",
            properties: { className: ["copy-code-button"] },
            children: [
              {
                type: "text",
                value: "copy",
              },
            ],
          }

          node.children.splice(codeElementIndex, 0, button)
        }
      }

      if (node.children) {
        node.children.forEach(visit)
      }
    }

    visit(tree)
  }
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeVue, {
    createElement: h,
  })
  .use(rehypeInsertButton)

export default processor
