import { API } from 'src/utils'
import Header from '@/components/Header'

export const HomePage = ({ courses }) => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default HomePage

export async function getServerSideProps() {
  const [courses] = await API.getAllCourses()

  return {
    props: { courses },
  }
}
