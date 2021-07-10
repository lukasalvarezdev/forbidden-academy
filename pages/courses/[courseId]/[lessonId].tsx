import LessonView from 'src/views/LessonPage'

// TODO: LESSON PROVDER HERE
export default function LessonPage() {
  return <LessonView />
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
