	import { MetadataRoute } from 'next'

	export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://garantgruz.ru'
	
	// Define all routes
	const routes = [
		'',
		'/simferopol',
		'/simferopol-sevastopol',
		'/simferopol-yalta',
		'/simferopol-alushta',
		'/simferopol-bakhchisaray',
		'/simferopol-kerch',
		'/simferopol-feodosia',
		'/simferopol-sudak',
		'/simferopol-dzhankoy',
		'/simferopol-evpatoria',
		'/simferopol-saki',
		'/simferopol-chernomorskoye',
		'/simferopol-krasnoperekopsk',
		'/simferopol-genicheskhesk',
		'/manipulator',
		'/flatbed',
		'/pyramid',
		'/about',
		'/not-found',
	]

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === '' ? 'daily' : 'weekly' as const,
		priority: route === '' ? 1 : route.includes('/simferopol') ? 0.8 : 0.6,
	}))
	}
