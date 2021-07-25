export const getSections = (course_id: string) => {
  return [
    [
      {
        id: '1',
        course_id,
        name: 'First section',
      },
    ],
    null,
  ]
}

export const getSection = (id: string) => {
  return [
    {
      id,
      section_id: '2',
      name: 'First section',
    },
    null,
  ]
}

export const createSection = (data: any) => {
  return [
    {
      id: '2',
      ...data,
    },
    null,
  ]
}

export const updateSection = (id: string, updates: any) => {
  console.log(id, updates)
  return [true, null]
}
