// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		baseURL: '/nuxt-gh-page/',
		buildAssetsDir: 'assets',
	},
});
