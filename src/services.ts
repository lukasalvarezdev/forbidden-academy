export function pepe(name: string) {
  return name
}

// THIS IS TEMPORAL
//Firebase examples:
// login and save user to collection
/**
  const user = await fire.auth().signInWithPopup(googleAuthProvider)
  const pepeProfile = user?.additionalUserInfo?.profile
  fire
    .firestore()
    .collection('user')
    .add({
      email: pepeProfile.email,
      name: pepeProfile.name,
      id: pepeProfile.id,
      courses: {
        1: 'teacher',
      },
    })
 */

// Get somethins from a collection
/**
  fire
    .firestore()
    .collection('user')
    .get()
    .then(querySnapshot => {
      const activities = []
      querySnapshot.forEach(doc => {
        activities.push({ ...doc.data(), id: doc.id })
      })
      console.log(activities)
      return activities
    })
*/
