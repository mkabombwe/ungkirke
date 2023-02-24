import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics'
import { FIREBASE_API } from './config'

let AUTH, DB, LOG

if (typeof window !== 'undefined') {
	const firebaseApp = initializeApp(FIREBASE_API)

	AUTH = getAuth(firebaseApp)
	DB = getFirestore(firebaseApp)
	LOG = getAnalytics(firebaseApp)

	if (process.env.NODE_ENV === 'development') {
		connectAuthEmulator(AUTH, 'http://localhost:9099')
		connectFirestoreEmulator(DB, 'localhost', 8080)
		setAnalyticsCollectionEnabled(LOG, false)
	} else {
		setAnalyticsCollectionEnabled(LOG, true)
	}
}

export { AUTH, DB, LOG }
