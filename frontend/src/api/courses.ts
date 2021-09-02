import { RequestRes } from 'utils/fetch-middleware'

export async function createCourse(course: any): RequestRes<any, string> {
  return [{ id: 'name-example' }, null]
}

export async function updateCourse(id: string, course: any): RequestRes<any, string> {
  return [true, null]
}

export async function publishCourse(id: string): RequestRes<any, string> {
  return [true, null]
}

export async function getCourse(id: string): RequestRes<any, string> {
  return [
    {
      description: 'some desc',
      id: '',
      language: 'english',
      name: 'Some name',
      price: 0,
      published: false,
      short_description: 'Some short desc',
      skill_level: 'advanced',
      user_id: '',
    },
    null,
  ]
}
