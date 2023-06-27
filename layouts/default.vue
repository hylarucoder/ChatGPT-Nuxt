<template>
  <slot />
</template>
<script>
export default {
  mounted() {
    this.addCopyButtonClickListener()
  },
  methods: {
    addCopyButtonClickListener() {
      document.body.addEventListener("click", (event) => {
        if (event.target && event.target.matches(".copy-code-button")) {
          const codeElement = event.target.nextElementSibling
          console.log(codeElement.tagName)
          if (codeElement.tagName === "CODE") {
            const codeText = codeElement.textContent
            this.copyToClipboard(codeText)
            console.log("已复制到剪贴板")
          }
        }
      })
    },
    copyToClipboard(text) {
      const textarea = document.createElement("textarea")
      textarea.value = text
      textarea.style.position = "absolute"
      textarea.style.left = "-9999px"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    },
  },
}
</script>
