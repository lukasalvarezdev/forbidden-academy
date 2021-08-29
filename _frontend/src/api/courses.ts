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
  return [{ name: 'Name', description: 'Description', id: 'example' }, null]
}
