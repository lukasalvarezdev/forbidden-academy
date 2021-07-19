export function getAllCourses() {}

export function createCourse(course: any) {
  return [
    {
      ...course,
      id: '2',
    },
    null,
  ]
}

export function updateCourse(rewrites: any) {
  return [true, null]
}

export function deleteCourse() {}

export function enrollToCourse() {}

export function getCourse() {}
