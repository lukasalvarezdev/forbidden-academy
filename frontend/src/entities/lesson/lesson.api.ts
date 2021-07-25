export const getLessons = (section_id: string) => {
  return [
    [
      {
        id: '1',
        section_id,
        name: 'First section',
      },
    ],
    null,
  ]
}

export const getLesson = (id: string) => {
  return [
    {
      id,
      section_id: '2',
      name: 'First lesson',
    },
    null,
  ]
}

export const createLesson = (data: any) => {
  return [
    {
      id: '2',
      ...data,
    },
    null,
  ]
}

export const updateLesson = (id: string, updates: any) => {
  console.log(id, updates)
  return [true, null]
}
