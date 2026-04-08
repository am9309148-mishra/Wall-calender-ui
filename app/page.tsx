"use client"

import { useState } from "react"
import Calendar from "@/components/Calendar"
import NotesPanel from "@/components/NotesPanel"

export default function Home() {
  const [range, setRange] = useState({
    start: null,
    end: null,
  })

  return (
    <main className="min-h-screen bg-neutral-100 p-4">
      <div className="grid lg:grid-cols-3 gap-4">

        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
          <Calendar range={range} setRange={setRange} />
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <NotesPanel range={range} />
        </div>

      </div>
    </main>
  )
}
