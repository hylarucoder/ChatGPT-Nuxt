/**
 * @typedef {import("hast").Root} Root
 * @typedef {import("hast").Element} Element
 * @typedef {import("react").ReactNode} ReactNode
 * @typedef {import("react").ReactElement<unknown>} ReactElement
 *
 * @callback CreateElementLike
 * @param {any} name
 * @param {any} props
 * @param {...ReactNode} children
 * @returns {ReactNode}
 *
 * @typedef SharedOptions
 * @property {CreateElementLike} createElement
 *   How to create elements or components.
 *   You should typically pass `React.createElement`.
 * @property {((props: any) => ReactNode)|undefined} [Fragment]
 *   Create fragments instead of an outer `<div>` if available.
 *   You should typically pass `React.Fragment`.
 * @property {string|undefined} [prefix='h-']
 *   React key prefix
 *
 * @typedef {SharedOptions & (import("./complex-types").ComponentsWithNodeOptions|import("./complex-types").ComponentsWithoutNodeOptions)} Options
 */

// @ts-ignore
import { toH } from "hast-to-hyperscript"
// @ts-expect-error: hush.
import tableCellStyle from "@mapbox/hast-util-table-cell-style"
import { whitespace } from "hast-util-whitespace"

const own = {}.hasOwnProperty
const tableElements = new Set(["table", "thead", "tbody", "tfoot", "tr", "th", "td"])

/**
 * @type {import("unified").Plugin<[Options], Root, ReactElement>}
 */
// @ts-ignore
export default function rehypeVue(options) {
  if (!options || typeof options.createElement !== "function") {
    throw new TypeError("createElement is not a function")
  }

  const createElement = options.createElement

  // @ts-ignore
  Object.assign(this, { Compiler: compiler })

  /** @type {import("unified").CompilerFunction<Root, ReactNode>} */
  // @ts-ignore
  function compiler(node) {
    /** @type {ReactNode} */
    // @ts-ignore
    let result = toH(h, tableCellStyle(node), options.prefix)
    if (node.type === "root") {
      // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
      result =
        result &&
        typeof result === "object" &&
        "type" in result &&
        "props" in result &&
        result.type === "div" &&
        (result.children.length !== 1 || node.children[0].type !== "element")
          ? // `children` does exist.
            // type-coverage:ignore-next-line
            result.props.children ?? result
          : [result]

      return createElement(
        options.Fragment || "div",
        {
          class: "markdown-body",
        },
        result
      )
    }

    return result
  }

  /**
   * @param {keyof JSX.IntrinsicElements} name
   * @param {Record<string, unknown>} props
   * @param {Array<ReactNode>} [children]
   * @returns {ReactNode}
   */
  // @ts-ignore
  function h(name, props, children) {
    // Currently, a warning is triggered by react for *any* white space in
    // tables.
    // So we remove the pretty lines for now.
    // See: <https://github.com/facebook/react/pull/7081>.
    // See: <https://github.com/facebook/react/pull/7515>.
    // See: <https://github.com/remarkjs/remark-react/issues/64>.
    if (children && tableElements.has(name)) {
      // @ts-ignore
      children = children.filter((child) => !whitespace(child))
    }

    if (options.components && own.call(options.components, name)) {
      const component = options.components[name]

      if (options.passNode && typeof component === "function") {
        // @ts-expect-error: `toH` passes the current node.
        // type-coverage:ignore-next-line
        props = Object.assign({ node: this }, props)
      }

      return createElement(component, props, children)
    }

    return createElement(name, props, children)
  }
}
