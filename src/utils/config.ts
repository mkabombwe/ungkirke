// API
// ----------------------------------------------------------------------

export const FIREBASE_API = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID
}

console.log(FIREBASE_API)

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
	H_MOBILE: 64,
	H_MAIN_DESKTOP: 88,
	H_DASHBOARD_DESKTOP: 92,
	H_DASHBOARD_DESKTOP_OFFSET: 92 - 32
}

export const NAV = {
	W_BASE: 260,
	W_DASHBOARD: 280,
	W_DASHBOARD_MINI: 88,
	//
	H_DASHBOARD_ITEM: 48,
	H_DASHBOARD_ITEM_SUB: 36,
	//
	H_DASHBOARD_ITEM_HORIZONTAL: 32
}

export const ICON = {
	NAV_ITEM: 24,
	NAV_ITEM_HORIZONTAL: 22,
	NAV_ITEM_MINI: 22
}
