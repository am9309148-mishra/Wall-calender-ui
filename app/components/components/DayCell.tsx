export default function DayCell({ day, range, onClick }: any) {
  const isStart = range.start?.toDateString() === day.toDateString()
  const isEnd = range.end?.toDateString() === day.toDateString()

  const inRange =
    range.start &&
    range.end &&
    day > range.start &&
    day < range.end

  return (
    <div
      onClick={onClick}
      className={`
        h-12 flex items-center justify-center rounded-lg cursor-pointer
        ${isStart ? "bg-blue-600 text-white" : ""}
        ${isEnd ? "bg-blue-600 text-white" : ""}
        ${inRange ? "bg-blue-200" : ""}
        hover:bg-blue-100 transition
      `}
    >
      {day.getDate()}
    </div>
  )
    }
