import LessonView from 'src/views/LessonView'
import Header from 'src/layouts/Header'

export default function LessonPage() {
  return (
    <div>
      <Header />
      <LessonView />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
