import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { googleAuthProvider }

export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUHT_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
    })
