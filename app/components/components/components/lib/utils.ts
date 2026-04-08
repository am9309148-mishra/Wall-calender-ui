export function generateMonth(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth()

  const lastDay = new Date(year, month + 1, 0)

  const days = []

  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(new Date(year, month, i))
  }

  return days
    }
