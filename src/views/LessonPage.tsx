import * as React from 'react'
import Header from 'src/layouts/Header'
import SectionsAside from 'src/entities/lesson/layouts/SectionsAside'
import Lesson from 'src/entities/lesson/layouts/Lesson'

export default function LessonPage() {
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <Header />
      <div className="d-f">
        <SectionsAside />

        <Lesson />
      </div>
    </div>
  )
}
