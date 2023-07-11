import { PropType } from "vue"
import { getRandomEmoji } from "~/utils/emoji"

export default defineComponent({
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div class="mr-3 flex cursor-pointer items-center rounded-md border border-neutral-200 bg-white px-3.5 py-3 transition-transform duration-200 hover:scale-110 hover:border-green-600 dark:bg-gray-800">
        <div class="flex items-center justify-center">
          <span class="overflow-clip align-middle text-[1.13rem]">{getRandomEmoji(props.text)}</span>
        </div>
        <div class="ml-3 truncate text-[0.88rem]">{props.text}</div>
      </div>
    )
  },
})
