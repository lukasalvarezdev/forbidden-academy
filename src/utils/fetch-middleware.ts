import fire from '@fire'

async function addToCollection(collection: string, data: { [x: string]: any }) {
  try {
    await fire.firestore().collection(collection).add(data)
    return true
  } catch {
    return false
  }
}

async function getCollection(collection: string) {
  try {
    const querySnapshot = await fire.firestore().collection(collection).get()

    const queries: any[] = []
    querySnapshot.forEach(query => queries.push({ ...query.data(), id: query.id }))
    return queries
  } catch (error) {
    console.log(error)
    return error
  }
}

async function getDocById(collection: string, id: string) {
  try {
    const ref = await fire.firestore().collection(collection).doc(id).get()

    return { ...ref.data(), id: ref.id }
  } catch (error) {
    return error
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
