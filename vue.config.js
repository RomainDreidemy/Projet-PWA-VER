module.exports = {
	pwa: {
		name: 'Le Petit Pas Marseillais',
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestOptions: {
			display: 'fullscreen'
		},

		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js'
		}
	}
}