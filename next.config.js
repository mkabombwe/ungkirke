/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true
	},
	swcMinify: true,
	output: 'standalone',
	trailingSlash: true,
	env: {
		// FIREBASE
		FIREBASE_API_KEY: 'AIzaSyDEQP8LxxarEtBbd8LbCex66xS60sNtfVY',
		FIREBASE_AUTH_DOMAIN: 'ungkirke.firebaseapp.com',
		FIREBASE_PROJECT_ID: 'ungkirke',
		FIREBASE_STORAGE_BUCKET: 'ungkirke.appspot.com',
		FIREBASE_MESSAGING_SENDER_ID: '395800754715',
		FIREBASE_APPID: '1:395800754715:web:a3d4b1742f1d0606f516be'
	}
}

module.exports = nextConfig
