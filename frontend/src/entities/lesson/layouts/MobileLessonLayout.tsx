import * as React from 'react'
import Lesson from 'src/entities/lesson/layouts/Lesson'

export default function LessonPage() {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <div className="d-f">
        <Lesson />
      </div>
    </div>
  )
}
