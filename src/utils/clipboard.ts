export const copyToClipboard = (content: string) => {
  const input = document.createElement("textarea")
  input.innerHTML = content
  input.setAttribute("readonly", "readonly")
  input.setAttribute("value", content)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, 99999)
  document.execCommand("copy")
  document.body.removeChild(input)
}
