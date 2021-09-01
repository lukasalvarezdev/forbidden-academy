export async function createCourse(course: any) {
  return [{ id: 'name-example' }, null]
}

export async function updateCourse(id: string, course: any) {
  return [true, null]
}

export async function publishCourse(id: string) {
  return [true, null]
}

export async function getCourse(id: string): Promise<[course: any, error: null]> {
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
