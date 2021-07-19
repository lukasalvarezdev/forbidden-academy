export function parseCourse(courseForm: HTMLFormElement | null) {
  if (!courseForm) return [null, 'There must be a form']

  try {
    return [
      Array.from(courseForm.querySelectorAll('.parse-courses')).reduce(
        (acc, curr: any) =>
          curr.classList.contains('fake-input') ||
          ['INPUT', 'SELECT', 'TEXTAREA'].includes(curr.nodeName)
            ? {
                ...acc,
                [curr.title || curr.name]: curr.title ? curr.textContent : curr.value,
              }
            : acc,
        {},
      ),
      null,
    ]
  } catch (error) {
    return [null, error.message]
  }
}
