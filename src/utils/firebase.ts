import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics'
import { FIREBASE_API } from './config'

// Check if Firebase is already initialized
const firebaseApp = getApps().length === 0 ? initializeApp(FIREBASE_API) : getApps()[0]!

const AUTH = getAuth(firebaseApp)
const DB = getFirestore(firebaseApp)

export const LOG = typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null

if (typeof window !== 'undefined' && LOG !== null)
	setAnalyticsCollectionEnabled(LOG, process.env.NODE_ENV === 'development')

// if (process.env.NODE_ENV === 'development') {
// 	connectAuthEmulator(AUTH, 'http://localhost:9099')
// 	connectFirestoreEmulator(DB, 'localhost', 8081)
// 	if (LOG !== null) setAnalyticsCollectionEnabled(LOG, false)
// } else {
// 	if (LOG !== null) setAnalyticsCollectionEnabled(LOG, true)
// }

export { AUTH, DB }
