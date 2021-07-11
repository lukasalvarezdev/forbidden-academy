import Header from 'src/layouts/Header'
import dynamic from 'next/dynamic'
const LessonView = dynamic(() => import('src/views/LessonView'), {
  ssr: false,
})

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
