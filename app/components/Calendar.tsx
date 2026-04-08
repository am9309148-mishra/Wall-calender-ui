"use client"

import { useState } from "react"
import { generateMonth } from "@/lib/utils"
import DayCell from "./DayCell"

export default function Calendar({ range, setRange }: any) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const days = generateMonth(currentDate)

  const handleSelect = (day: Date) => {
    if (!range.start || range.end) {
      setRange({ start: day, end: null })
    } else {
      if (day < range.start) {
        setRange({ start: day, end: range.start })
      } else {
        setRange({ start: range.start, end: day })
      }
    }
  }

  return (
    <div>
      <div className="h-40 rounded-xl overflow-hidden mb-4">
        <img src="/hero.jpg" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-center mb-3">
        <button onClick={() =>
          setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
        }>◀</button>

        <h2 className="font-bold text-lg">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric"
          })}
        </h2>

        <button onClick={() =>
          setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
        }>▶</button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            range={range}
            onClick={() => handleSelect(day)}
          />
        ))}
      </div>
    </div>
  )
        }
