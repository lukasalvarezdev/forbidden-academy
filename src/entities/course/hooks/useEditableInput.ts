import { useCourses } from '../services'

export function useEditableInput() {
  const { updateCourse } = useCourses()

  return (e: React.ChangeEvent<HTMLFormElement>) => {
    updateCourse?.({ [e.target.title || e.target.name]: e.target.innerText || e.target.value })
  }
}
