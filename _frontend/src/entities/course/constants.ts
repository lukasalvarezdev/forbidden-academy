import { Course } from './services'

export const defaultCourse: Course = {
  id: '2',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae risus a ex mattis condimentum. Etiam sed dui nec mauris pellentesque volutpat sed non ante. Sed lacinia ante tortor. Ut sollicitudin dolor ut dignissim tempus. Integer a erat rutrum nisi dignissim ornare at egestas felis. Nunc sed semper tellus. Donec tincidunt nisl non nulla sollicitudin, eget venenatis nunc sodales. Curabitur ac nulla semper, sagittis nunc non, fermentum ligula. Aliquam pharetra metus eget risus egestas, sed maximus urna dignissim. Morbi lorem tortor, luctus eget tincidunt sed, interdum sit amet enim. Donec pretium luctus auctor. ',
  title: 'JavaScript Moderno, Guía Definitiva, Construye +15 Proyectos',
  short_description:
    'Aprende el lenguaje de programación web más popular paso a paso Con Proyectos, inc. Electron React MongoDB Node Express',
  language: 'spanish',
  price: 223,
  skill_level: 'advanced',
  author: {
    name: 'Lukas Alvarez',
    id: '12',
  },
  rating: 3,
}
