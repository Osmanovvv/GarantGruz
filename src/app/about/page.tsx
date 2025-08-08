import type { Metadata } from 'next'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Phone,
	Mail,
	MapPin,
	Truck,
	Shield,
	Clock,
	CheckCircle,
	ArrowRight,
	ArrowLeft,
	Users,
	Star,
	Award,
	Target,
	Heart,
	Building,
	Calendar,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Discount from '@/components/Discount';

export const metadata: Metadata = {
	title: 'О компании GARANT | Грузоперевозки по Крыму с 2014 года',
	description: 'Компания GARANT - лидер грузоперевозок в Крыму с 2014 года. 15 единиц техники, 5000+ довольных клиентов, 10 лет опыта. Пирамиды, бортовые, манипуляторы. Профессиональная команда.',
	keywords: [
		'грузоперевозки Крым',
		'о компании GARANT',
		'транспортная компания Крым',
		'манипуляторы Крым',
		'пирамиды для окон',
		'бортовые машины доставка',
	],
	openGraph: {
		title: 'О компании GARANT | Грузоперевозки по Крыму',
		description: 'Компания GARANT - лидер грузоперевозок в Крыму. 10 лет опыта, 5000+ довольных клиентов, собственный автопарк.',
		url: 'https://garantgruz.ru/about',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/about',
	},
};

const AboutUs = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="О компании GARANT"
				description="Компания GARANT - лидер грузоперевозок в Крыму с 2014 года. 15 единиц техники, 5000+ довольных клиентов, 10 лет опыта. Пирамиды, бортовые, манипуляторы. Профессиональная команда."
				serviceType="Транспортная компания грузоперевозок"
				url="https://garantgruz.ru/about"
				priceRange="1500₽-25000₽"
				breadcrumbs={[
					{
						name: "Главная",
						url: "https://garantgruz.ru",
					},
					{
						name: "О компании",
						url: "https://garantgruz.ru/about",
					},
				]}
				offers={[
					{
						name: "Машины с пирамидой",
						price: "1500",
						priceCurrency: "RUB",
						description: "Перевозка грузов машинами с пирамидой",
						availability: "InStock",
					},
					{
						name: "Бортовые машины",
						price: "1500",
						priceCurrency: "RUB",
						description: "Перевозка грузов бортовыми машинами",
						availability: "InStock",
					},
					{
						name: "Манипуляторы",
						price: "4000",
						priceCurrency: "RUB",
						description: "Услуги манипуляторов и подъем грузов",
						availability: "InStock",
					},
				]}
			/>
			{/* Header */}
			<header className="bg-garant-navy text-white py-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-between items-center mb-3">
						<Link href="/" className="flex items-center gap-2">
							<Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold" />
							<div>
								<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-garant-gold">
									GARANT
								</h2>
								<p className="text-xs sm:text-sm text-gray-300 hidden sm:block">
									грузовые перевозки
								</p>
							</div>
						</Link>

						<div className="flex items-center gap-4">
							<Button
								className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
								asChild
							>
								<a href="tel:+79788631197">Позвонить</a>
							</Button>
						</div>
					</div>

					{/* <div className="flex justify-start">
						<Link
							to="/"
							className="flex items-center gap-2 hover:text-garant-gold transition-colors text-sm"
						>
							<ArrowLeft className="h-4 w-4" />
							<span>Назад на главную</span>
						</Link>
					</div> */}
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-garant-navy to-garant-navy-light text-white py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="mb-6">
						<div className="inline-flex items-center gap-2 bg-garant-gold/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6">
							<Building className="h-5 w-5 text-garant-gold" />
							<span className="text-garant-gold font-semibold text-sm sm:text-base">
								Лидер грузоперевозок в Крыму
							</span>
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						О компании GARANT
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						10 лет надежных грузоперевозок по Крыму. Профессиональная команда,
						современный автопарк и индивидуальный подход к каждому клиенту.
					</p>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">2014</div>
							<div className="text-sm text-gray-300">год основания</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">15</div>
							<div className="text-sm text-gray-300">единиц техники</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">5000+</div>
							<div className="text-sm text-gray-300">довольных клиентов</div>
						</div>
					</div>

					<Discount />
				</div>
			</section>

			{/* Contact Form */}
			<div id="form">
				<ContactForm />
			</div>

			{/* Company Story */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-6">
								История компании GARANT
							</h2>
							<div className="space-y-4 text-gray-600">
								<p className="text-lg">
									Компания GARANT была основана в 2014 году с простой, но
									амбициозной целью - стать надежным партнером в сфере
									грузоперевозок по Крыму.
								</p>
								<p>
									Начав с одной машины и безграничного желания помогать людям,
									мы выросли в ведущую транспортную компанию полуострова.
									Сегодня наш автопарк насчитывает 15 единиц техники различных
									типов.
								</p>
								<p>
									За 10 лет работы мы обслужили более 5000 клиентов, выполнили
									десятки тысяч успешных перевозок и заслужили репутацию самой
									надежной транспортной компании в Крыму.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4">
							<Card className="p-4 text-center border-2 border-garant-gold">
								<CardContent className="p-0">
									<Calendar className="h-8 w-8 text-garant-gold mx-auto mb-3" />
									<div className="text-2xl font-bold text-garant-navy">10</div>
									<div className="text-sm text-gray-600">лет опыта</div>
								</CardContent>
							</Card>

							<Card className="p-4 text-center border-2 border-garant-gold">
								<CardContent className="p-0">
									<Users className="h-8 w-8 text-garant-gold mx-auto mb-3" />
									<div className="text-2xl font-bold text-garant-navy">15+</div>
									<div className="text-sm text-gray-600">сотрудников</div>
								</CardContent>
							</Card>

							<Card className="p-4 text-center border-2 border-garant-gold">
								<CardContent className="p-0">
									<Star className="h-8 w-8 text-garant-gold mx-auto mb-3" />
									<div className="text-2xl font-bold text-garant-navy">4.9</div>
									<div className="text-sm text-gray-600">рейтинг</div>
								</CardContent>
							</Card>

							<Card className="p-4 text-center border-2 border-garant-gold">
								<CardContent className="p-0">
									<Shield className="h-8 w-8 text-garant-gold mx-auto mb-3" />
									<div className="text-2xl font-bold text-garant-navy">
										100%
									</div>
									<div className="text-sm text-gray-600">застрахованы</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Our Fleet */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Наш автопарк - современная техника для любых задач
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							15 единиц специализированной техники для решения любых
							транспортных задач
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8 mb-12">
						{/* Машины с пирамидой */}
						<Card className="p-6 border-2 border-garant-gold bg-garant-gold/5 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow text-center">
								<div className="flex-grow">
									<div className="text-4xl mb-4">🚛</div>
									<h3 className="text-xl font-bold text-garant-navy mb-3">
										Машины с пирамидой
									</h3>
									<p className="text-gray-600 mb-4">
										Для объемных грузов, мебели и переездов
									</p>
									<div className="space-y-2 text-sm">
										<div className="flex justify-between">
											<span>Количество:</span>
											<span className="font-semibold">7 машин</span>
										</div>
										<div className="flex justify-between">
											<span>Грузоподъемность:</span>
											<span className="font-semibold">до 5 тонн</span>
										</div>
										<div className="flex justify-between">
											<span>Длина кузова:</span>
											<span className="font-semibold">3–6 метров</span>
										</div>
									</div>
								</div>
								<div className="mt-4">
									<Button
										className="bg-garant-navy hover:bg-garant-navy-light text-white w-full"
										asChild
									>
										<Link href="/pyramid">Подробнее об услуге</Link>
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Бортовые машины */}
						<Card className="p-6 border-2 border-blue-500 bg-blue-50 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow text-center">
								<div className="flex-grow">
									<div className="text-4xl mb-4">📦</div>
									<h3 className="text-xl font-bold text-garant-navy mb-3">
										Бортовые машины
									</h3>
									<p className="text-gray-600 mb-4">
										Для тяжелых грузов и стройматериалов
									</p>
									<div className="space-y-2 text-sm">
										<div className="flex justify-between">
											<span>Количество:</span>
											<span className="font-semibold">5 машин</span>
										</div>
										<div className="flex justify-between">
											<span>Грузоподъемность:</span>
											<span className="font-semibold">до 5 тонн</span>
										</div>
										<div className="flex justify-between">
											<span>Длина кузова:</span>
											<span className="font-semibold">4–6 метров</span>
										</div>
									</div>
								</div>
								<div className="mt-4">
									<Button
										className="bg-blue-600 hover:bg-blue-700 text-white w-full"
										asChild
									>
										<Link href="/flatbed">Подробнее об услуге</Link>
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Манипуляторы */}
						<Card className="p-6 border-2 border-green-500 bg-green-50 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow text-center">
								<div className="flex-grow">
									<div className="text-4xl mb-4">🏗️</div>
									<h3 className="text-xl font-bold text-garant-navy mb-3">
										Манипуляторы
									</h3>
									<p className="text-gray-600 mb-4">
										Для подъема грузов на высоту
									</p>
									<div className="space-y-2 text-sm">
										<div className="flex justify-between">
											<span>Количество:</span>
											<span className="font-semibold">3 машины</span>
										</div>
										<div className="flex justify-between">
											<span>Грузоподъемность:</span>
											<span className="font-semibold">до 5 тонн</span>
										</div>
										<div className="flex justify-between">
											<span>Высота подъема:</span>
											<span className="font-semibold">до 15 метров</span>
										</div>
									</div>
								</div>
								<div className="mt-4">
									<Button
										className="bg-green-600 hover:bg-green-700 text-white w-full"
										asChild
									>
										<Link href="/manipulator">Подробнее об услуге</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="bg-garant-navy text-white rounded-lg p-6 sm:p-8 text-center">
						<h3 className="text-xl sm:text-2xl font-bold mb-4 text-garant-gold">
							Все машины проходят регулярное техобслуживание
						</h3>
						<p className="text-gray-200 mb-6">
							Наша техника находится в идеальном состоянии, что гарантирует
							безопасность и надежность перевозок
						</p>
						<div className="grid sm:grid-cols-3 gap-4 text-sm">
							<div className="flex items-center gap-2 justify-center">
								<CheckCircle className="h-4 w-4 text-garant-gold" />
								<span>Ежедневный осмотр</span>
							</div>
							<div className="flex items-center gap-2 justify-center">
								<CheckCircle className="h-4 w-4 text-garant-gold" />
								<span>Плановое ТО</span>
							</div>
							<div className="flex items-center gap-2 justify-center">
								<CheckCircle className="h-4 w-4 text-garant-gold" />
								<span>Страхование грузов</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Наши ценности и принципы работы
						</h2>
						<p className="text-lg text-gray-600">
							То, что делает GARANT особенным в мире грузоперевозок
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors h-full">
							<CardContent className="p-0">
								<div className="bg-garant-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-garant-gold" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Надежность
								</h3>
								<p className="text-gray-600 text-sm">
									Мы гарантируем сохранность вашего груза и соблюдение всех
									сроков доставки
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors h-full">
							<CardContent className="p-0">
								<div className="bg-garant-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Heart className="h-8 w-8 text-garant-gold" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Забота о клиентах
								</h3>
								<p className="text-gray-600 text-sm">
									Индивидуальный подход к каждому клиенту и решение самых
									сложных задач
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors h-full">
							<CardContent className="p-0">
								<div className="bg-garant-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Target className="h-8 w-8 text-garant-gold" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Профессионализм
								</h3>
								<p className="text-gray-600 text-sm">
									Опытные водители и современное оборудование для качественной
									работы
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors h-full">
							<CardContent className="p-0">
								<div className="bg-garant-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Clock className="h-8 w-8 text-garant-gold" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Пунктуальность
								</h3>
								<p className="text-gray-600 text-sm">
									Подача транспорта точно в назначенное время
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Certificates & Licenses */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Лицензии и сертификаты
						</h2>
						<p className="text-lg text-gray-600">
							Мы работаем полностью легально и соблюдаем все требования
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="p-6 text-center">
							<CardContent className="p-0">
								<Award className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="font-semibold text-garant-navy mb-2">
									Лицензия на перевозки
								</h3>
								<p className="text-sm text-gray-600">
									Официальное разрешение на грузовые перевозки
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center">
							<CardContent className="p-0">
								<Shield className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="font-semibold text-garant-navy mb-2">
									Страхование ОСАГО
								</h3>
								<p className="text-sm text-gray-600">
									Все машины застрахованы по ОСАГО
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center">
							<CardContent className="p-0">
								<CheckCircle className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="font-semibold text-garant-navy mb-2">
									Допуски водителей
								</h3>
								<p className="text-sm text-gray-600">
									Все водители имеют категории B, C, E
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center">
							<CardContent className="p-0">
								<Building className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="font-semibold text-garant-navy mb-2">
									Регистрация ООО
								</h3>
								<p className="text-sm text-gray-600">
									Официально зарегистрированная деятельность
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-16 bg-garant-navy text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-gold mb-4">
							Почему клиенты выбирают GARANT?
						</h2>
						<p className="text-lg text-gray-200">
							Преимущества, которые делают нас лидером рынка
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						<div className="text-center">
							<div className="bg-garant-gold text-garant-navy w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
								30мин
							</div>
							<h3 className="text-xl font-semibold mb-3 text-garant-gold">
								Быстрая подача
							</h3>
							<p className="text-gray-300">
								Наш транспорт приедет к вам в течение 30-60 минут после
								подтверждения заказа
							</p>
						</div>

						<div className="text-center">
							<div className="bg-garant-gold text-garant-navy w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
								10%
							</div>
							<h3 className="text-xl font-semibold mb-3 text-garant-gold">
								Скидка онлайн
							</h3>
							<p className="text-gray-300">
								Постоянная скидка 10% для всех клиентов, заказывающих услуги
								через наш сайт
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Information */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Контактная информация
						</h2>
						<p className="text-lg text-gray-600">
							Свяжитесь с нами удобным способом
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<Card className="p-6 text-center border-2 border-garant-gold">
							<CardContent className="p-0">
								<Phone className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Телефон диспетчера
								</h3>
								<a
									href="tel:+79788631197"
									className="text-xl font-bold text-garant-gold hover:text-garant-navy transition-colors"
								>
									+7 (978) 863-11-97
								</a>
								<p className="text-sm text-gray-600 mt-2">
									Для заявок и вопросов
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold">
							<CardContent className="p-0">
								<Mail className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									Электронная почта
								</h3>
								<a
									href="mailto:ilyas-crimea@mail.ru"
									className="text-lg font-semibold text-garant-gold hover:text-garant-navy transition-colors"
								>
									ilyas-crimea@mail.ru
								</a>
								<p className="text-sm text-gray-600 mt-2">
									Для заявок и вопросов
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold">
							<CardContent className="p-0">
								<MapPin className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-3">
									География работы
								</h3>
								<p className="text-lg font-semibold text-garant-navy">
									Весь Крым
								</p>
								<p className="text-sm text-gray-600 mt-2">
									Симферополь, Ялта, Севастополь, Керчь и другие города
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-garant-navy text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="flex items-center justify-center gap-2 mb-4">
							<Truck className="h-6 w-6 text-garant-gold" />
							<span className="text-xl font-bold text-garant-gold">GARANT</span>
						</div>
						<p className="text-gray-300 text-sm mb-6">
							Надежный партнер в сфере грузоперевозок по Крыму с 2014 года
						</p>
						<div className="flex justify-center gap-8 mb-6">
							<div className="flex items-center gap-2">
								<Phone className="h-4 w-4" />
								<a href="tel:+79788631197" className="hover:text-garant-gold">
									+7 (978) 863-11-97
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								<a
									href="mailto:ilyas-crimea@mail.ru"
									className="hover:text-garant-gold"
								>
									ilyas-crimea@mail.ru
								</a>
							</div>
						</div>
						<p className="text-gray-400 text-sm">
							© 2025 GARANT. Грузоперевозки в Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default AboutUs;
