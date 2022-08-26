import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// API
// ----------------------------------------------------------------------

export const FIREBASE_API = {
	apiKey: 'AIzaSyDEQP8LxxarEtBbd8LbCex66xS60sNtfVY',
	authDomain: 'ungkirke.firebaseapp.com',
	projectId: 'ungkirke',
	storageBucket: 'ungkirke.appspot.com',
	messagingSenderId: '395800754715',
	appId: '1:395800754715:web:a3d4b1742f1d0606f516be'
}

const firebaseApp = initializeApp(FIREBASE_API)

export const DB = getFirestore(firebaseApp)

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
	MOBILE_HEIGHT: 64,
	MAIN_DESKTOP_HEIGHT: 88,
	DASHBOARD_DESKTOP_HEIGHT: 92,
	DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32
}

export const NAVBAR = {
	BASE_WIDTH: 260,
	DASHBOARD_WIDTH: 280,
	DASHBOARD_COLLAPSE_WIDTH: 88,
	//
	DASHBOARD_ITEM_ROOT_HEIGHT: 48,
	DASHBOARD_ITEM_SUB_HEIGHT: 40,
	DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
}

export const ICON = {
	NAVBAR_ITEM: 22,
	NAVBAR_ITEM_HORIZONTAL: 20
}

// SETTINGS
// Please remove `localStorage` when you set settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
	themeMode: 'light',
	themeDirection: 'ltr',
	themeColorPresets: 'default',
	themeLayout: 'horizontal',
	themeStretch: false
}
