export async function createSection(name: string): Promise<[string | number, null]> {
  return [Math.random(), null]
}

export async function createLesson(
  section_id: string | number,
  name: string,
): Promise<[string | number, null]> {
  return [Math.random(), null]
}
