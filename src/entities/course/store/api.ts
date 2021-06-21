import fetch from 'src/utils/fetch-middleware'

export function getAllCourses() {}

export function createCourse(course: any) {
  return fetch({
    collection: 'course',
    action: 'POST',
    data: course,
  })
}

export function updateCourse(rewrites: any) {
  return fetch({
    collection: 'course',
    id: rewrites.id,
    action: 'POST',
    data: rewrites,
  })
}

export function deleteCourse() {}

export function enrollToCourse() {}

export function getCourse() {}
