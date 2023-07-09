interface Props {
  icon: string
  text?: string
  size?: string
}

export default defineComponent({
  props: {
    icon: String,
    text: String,
    size: String,
  },
  setup(props: Props) {
    const hasText = Boolean(props.text)

    return () => (
      <button
        class={[
          "flex h-10 flex-grow cursor-pointer items-center justify-center truncate rounded-md bg-white p-3 text-center drop-shadow-sm hover:bg-gray-200 dark:bg-gray-800",
          hasText ? "w-32" : "",
        ]}
      >
        <div class="flex items-center justify-center">
          <span class={[props.icon, "h-4 w-4"]} />
        </div>
        {hasText && <div class="ml-1 truncate text-[0.75rem]">{props.text}</div>}
      </button>
    )
  },
})
