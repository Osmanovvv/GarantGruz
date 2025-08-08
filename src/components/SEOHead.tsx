// import { Helmet } from "react-helmet-async";
import Head from "next/head";

interface Offer {
	name: string;
	price: string;
	priceCurrency: string;
	description: string;
	availability: string;
}

interface BreadcrumbItem {
	name: string;
	url: string;
}

interface SEOHeadProps {
	title: string;
	description: string;
	serviceType?: string;
	url?: string;
	image?: string;
	offers?: Offer[];
	priceRange?: string;
	breadcrumbs?: BreadcrumbItem[];
}

const SEOHead = ({
	title,
	description,
	serviceType,
	url = "https://garantgruz.ru",
	image = "https://garantgruz.ru/og-image.jpg",
	offers,
	priceRange,
	breadcrumbs,
}: SEOHeadProps) => {
	const fullTitle = `${title} | GARANT - Грузоперевозки по Крыму`;
	const canonicalUrl = url;

	// Базовая схема Service
	const baseSchemaData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: title,
		serviceType: serviceType || title,
		description: description,
		areaServed: {
			"@type": "Place",
			name: "Республика Крым",
			address: {
				"@type": "PostalAddress",
				addressRegion: "Крым",
				addressCountry: "RU",
			},
		},
		provider: {
			"@type": "Organization",
			name: "GARANT",
			telephone: "+7-978-863-11-97",
			url: "https://garantgruz.ru",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Симферополь",
				addressRegion: "Крым",
				addressCountry: "RU",
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.9",
				reviewCount: "150",
				bestRating: "5",
				worstRating: "1",
			},
		},
		serviceUrl: url,
		availableChannel: {
			"@type": "ServiceChannel",
			servicePhone: "+7-978-863-11-97",
			serviceUrl: url,
		},
	};

	// Добавляем ценовую информацию если есть
	const schemaData = {
		...baseSchemaData,
		...(priceRange && {
			priceRange: priceRange,
		}),
		...(offers &&
			offers.length > 0 && {
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Услуги грузоперевозок",
				itemListElement: offers.map((offer, index) => ({
					"@type": "Offer",
					name: offer.name,
					description: offer.description,
					price: offer.price,
					priceCurrency: offer.priceCurrency,
					availability: `https://schema.org/${offer.availability}`,
					seller: {
						"@type": "Organization",
						name: "GARANT",
					},
					itemOffered: {
						"@type": "Service",
						name: offer.name,
						description: offer.description,
					},
					position: index + 1,
				})),
			},
		}),
	};

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />

			{/* Canonical URL */}
			<link rel="canonical" href={canonicalUrl} />

			{/* Additional SEO meta tags */}
			<meta name="robots" content="index, follow" />
			<meta name="googlebot" content="index, follow" />
			<meta name="author" content="GARANT - Грузоперевозки по Крыму" />

			{/* Keywords */}
			<meta
				name="keywords"
				content="грузоперевозки крым, симферополь, газель, манипулятор, бортовые машины, доставка, перевозка грузов"
			/>

			{/* Geographic meta tags */}
			<meta name="geo.region" content="RU-CR" />
			<meta name="geo.placename" content="Крым, Симферополь" />
			<meta name="ICBM" content="44.9572,34.1108" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={canonicalUrl} />
			<meta
				property="og:site_name"
				content="GARANT - Грузоперевозки по Крыму"
			/>
			<meta property="og:locale" content="ru_RU" />

			{/* Article meta for better sharing */}
			<meta property="article:author" content="GARANT" />
			<meta property="article:publisher" content="https://garantgruz.ru" />

			{/* Twitter Card */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:site" content="@garant_crimea" />

			{/* Additional structured data for local business */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					"@id": "https://garantgruz.ru/#localbusiness",
					name: "GARANT",
					description: "Грузоперевозки по Крыму",
					url: "https://garantgruz.ru",
					telephone: "+7-978-863-11-97",
					address: {
						"@type": "PostalAddress",
						addressLocality: "Симферополь",
						addressRegion: "Крым",
						addressCountry: "RU",
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: "44.9572",
						longitude: "34.1108",
					},
					openingHoursSpecification: {
						"@type": "OpeningHoursSpecification",
						dayOfWeek: [
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday",
						],
						opens: "08:00",
						closes: "20:00",
					},
					serviceArea: {
						"@type": "Place",
						name: "Республика Крым",
					},
					review: [
						{
							"@type": "Review",
							author: {
								"@type": "Person",
								name: "Андрей К.",
							},
							reviewRating: {
								"@type": "Rating",
								ratingValue: "5",
								bestRating: "5",
							},
							reviewBody:
								"Заказывали Газель для перевозки стеклопакетов в Ялту. Все довезли целым, водитель очень аккуратный. Цена честная, рекомендую!",
							datePublished: "2024-01-15",
						},
						{
							"@type": "Review",
							author: {
								"@type": "Organization",
								name: "ООО Стройтех",
							},
							reviewRating: {
								"@type": "Rating",
								ratingValue: "5",
								bestRating: "5",
							},
							reviewBody:
								"Постоянно пользуемся услугами для доставки стройматериалов. Быстро, надежно, всегда в срок. Автопарк хороший.",
							datePublished: "2024-02-20",
						},
						{
							"@type": "Review",
							author: {
								"@type": "Person",
								name: "Мария С.",
							},
							reviewRating: {
								"@type": "Rating",
								ratingValue: "5",
								bestRating: "5",
							},
							reviewBody:
								"Заказывали манипулятор из Симферополя в Севастополь. Манипулятор подали быстро. Скидка 10% приятно удивила!",
							datePublished: "2024-03-10",
						},
					],
				})}
			</script>

			{/* Main service schema */}
			<script type="application/ld+json">{JSON.stringify(schemaData)}</script>

			{/* Breadcrumbs schema */}
			{breadcrumbs && breadcrumbs.length > 0 && (
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: breadcrumbs.map((item, index) => ({
							"@type": "ListItem",
							position: index + 1,
							name: item.name,
							item: item.url,
						})),
					})}
				</script>
			)}
		</Head>
	);
};

export default SEOHead;
