// Date utilities
export function getUtcNow() {
  return new Date().toISOString().toString()
}

export function formatDateString(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  const timeDifference = now.getTime() - date.getTime()
  const withinOneDay = timeDifference < 24 * 60 * 60 * 1000
  const withinOneYear = now.getFullYear() - date.getFullYear() < 1

  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")
  const day = date.getDate().toString().padStart(2, "0")
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const year = date.getFullYear()

  if (withinOneDay) {
    return `${hours}:${minutes}`
  } else if (withinOneYear) {
    return `${month}/${day} ${hours}:${minutes}`
  } else {
    return `${year}/${month}/${day}`
  }
}
