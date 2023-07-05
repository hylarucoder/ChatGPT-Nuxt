export const setMobileCssVariables = (attrs: Record<string, string | number>) => {
  for (const attr in attrs) {
    document.documentElement.style.setProperty(`${attr}`, `${attrs[attr]}`)
  }
}
