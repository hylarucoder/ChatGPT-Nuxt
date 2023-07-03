export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
  immediate: boolean = true,
  trailing: boolean = true
) => {
  let timerId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    const later = () => {
      // @ts-ignore
      timerId = undefined
      if (!immediate || trailing) {
        func.apply(this, args)
      }
    }

    const shouldCallNow = immediate && timerId === undefined
    clearTimeout(timerId)
    timerId = setTimeout(later, delay) as ReturnType<typeof setTimeout>

    if (shouldCallNow) {
      func.apply(this, args)
    }
  }
}
