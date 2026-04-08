"use client"

import { useEffect, useState } from "react"

export default function NotesPanel({ range }: any) {
  const [notes, setNotes] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) setNotes(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", notes)
  }, [notes])

  return (
    <div>
      <h2 className="font-bold mb-2">Notes</h2>

      {range.start && (
        <p className="text-sm text-gray-500 mb-2">
          {range.start.toDateString()} → {range.end?.toDateString()}
        </p>
      )}

      <textarea
        className="w-full h-60 border rounded-lg p-2"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes..."
      />
    </div>
  )
        }
