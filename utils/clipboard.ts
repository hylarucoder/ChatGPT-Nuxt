export const copyToClipboard = (content: string) => {
  // copy
  const input = document.createElement("input")
  input.setAttribute("readonly", "readonly")
  input.setAttribute("value", content)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 9999)
  document.execCommand("copy")
  document.body.removeChild(input)
}
