import fire from '@fire'

async function addToCollection(collection: string, data: { [x: string]: any }) {
  try {
    const res = await fire.firestore().collection(collection).add(data)

    return [res, null]
  } catch {
    return [null, false]
  }
}

async function getCollection(collection: string) {
  try {
    const querySnapshot = await fire.firestore().collection(collection).get()

    const queries: any[] = []
    querySnapshot.forEach(query => queries.push({ ...query.data(), id: query.id }))
    return [queries, null]
  } catch (error) {
    return [null, error]
  }
}

async function getDocById(collection: string, id: string) {
  try {
    const ref = await fire.firestore().collection(collection).doc(id).get()

    return [{ ...ref.data(), id: ref.id }, null]
  } catch (error) {
    return [null, error]
  }
}

export default function fetchToFirestore({
  collection,
  id,
  data,
  action,
}: {
  action: 'POST' | 'GET' | 'GET_ONE'
  collection: string
  id?: string
  data?: any
}) {
  switch (action) {
    case 'POST':
      return addToCollection(collection, data)

    case 'GET':
      return getCollection(collection)

    case 'GET_ONE':
      return getDocById(collection, id as string)
    default:
      throw new Error('Unsupported action' + action)
  }
}
