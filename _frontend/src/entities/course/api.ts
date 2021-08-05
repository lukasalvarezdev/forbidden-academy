import { Course } from 'src/entities/course/services'

export async function getAllCourses(): Promise<[Course[], null]> {
  return [
    [
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez.',
          id: '1',
        },
        id: '1',
        price: 122,
        language: 'english',
        rating: 2,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez',
          id: '1',
        },
        id: '2',
        price: 122,
        language: 'english',
        rating: 2,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez',
          id: '1',
        },
        id: '3',
        price: 122,
        language: 'english',
        rating: 4,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez',
          id: '1',
        },
        id: '4',
        price: 122,
        language: 'english',
        rating: 4,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez',
          id: '1',
        },
        id: '5',
        price: 122,
        language: 'english',
        rating: 4,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
      {
        title: 'The complete guide NodeJS course ',
        description:
          'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
        author: {
          name: 'Lukas Alvarez',
          id: '1',
        },
        id: '6',
        price: 122,
        language: 'english',
        rating: 4,
        short_description: 'pepe',
        skill_level: 'advanced',
      },
    ],
    null,
  ]
}

export async function getCourse(id: string): Promise<[Course, null]> {
  return [
    {
      title: 'The complete guide NodeJS course ',
      description:
        'In this learning journey, you will find out how to be more digital and how to digitize your current skills.',
      author: {
        name: 'Lukas Alvarez.',
        id: '1',
      },
      id: '1',
      price: 122,
      language: 'english',
      rating: 2,
      short_description: 'pepe',
      skill_level: 'advanced',
    },
    null,
  ]
}

export async function createCourse(course: Course): Promise<[string | number, null]> {
  return [Math.random(), null]
}
