import { defineComponent } from "vue"
// import iconUpload from '@/icons/upload.svg?component'

const icons = {
  // upload: iconUpload,
}

export default defineComponent({
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      default: "",
      required: true,
    },
  },
  setup(props) {
    const currentComponent = icons[props.icon]

    return () => <component is={currentComponent} />
  },
})
