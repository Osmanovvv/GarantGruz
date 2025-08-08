import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Phone,
	Mail,
	MapPin,
	Truck,
	Shield,
	Clock,
	Waves,
	CheckCircle,
	ArrowRight,
	ArrowLeft,
	Home,
	Building,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Directions from '@/components/Directions';
import Discount from '@/components/Discount';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Грузоперевозки Симферополь - Красноперекопск',
	description: 'Доставка грузов из Симферополя в Красноперекопск за 1.5-2 часа. 124 км, от 9000₽. Перевозка в северный город-порт Крыма. Все типы транспорта.',
	keywords: [
		'грузоперевозки Симферополь Красноперекопск',
		'газель Красноперекопск',
		'доставка Красноперекопск',
		'перевозка грузов',
	],
	openGraph: {
		title: 'Грузоперевозки Симферополь - Красноперекопск | GARANT',
		description: 'Доставка грузов из Симферополя в Красноперекопск за 1.5-2 часа. 124 км, от 9000₽.',
		url: 'https://garantgruz.ru/simferopol-krasnoperekopsk',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/simferopol-krasnoperekopsk',
	},
}

const SimferopolKrasnoperekopsk = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки Симферополь - Красноперекопск"
				description="Доставка грузов из Симферополя в Красноперекопск за 1.5-2 часа. 124 км, от 9000₽. Перевозка в северный город-порт Крыма. Все типы транспорта."
				serviceType="Грузоперевозки Симферополь - Красноперекопск"
				url="https://garantgruz.ru/simferopol-krasnoperekopsk"
				priceRange="9000₽-18000₽"
				breadcrumbs={[
					{
						name: "Главная",
						url: "https://garantgruz.ru",
					},
					{
						name: "Направления",
						url: "https://garantgruz.ru/#routes",
					},
					{
						name: "Симферополь - Красноперекопск",
						url: "https://garantgruz.ru/simferopol-krasnoperekopsk",
					},
				]}
				offers={[
					{
						name: "Машина с пирамидой до Красноперекопска",
						price: "9000",
						priceCurrency: "RUB",
						description: "124 км, 1.5-2 часа в пути",
						availability: "InStock",
					},
					{
						name: "Бортовая машина до Красноперекопска",
						price: "9000",
						priceCurrency: "RUB",
						description: "Для тяжелых грузов, 124 км",
						availability: "InStock",
					},
					{
						name: "Манипулятор до Красноперекопска",
						price: "18000",
						priceCurrency: "RUB",
						description: "С услугами подъема, 124 км",
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
							href="/"
							className="flex items-center gap-2 hover:text-garant-gold transition-colors text-sm"
						>
							<ArrowLeft className="h-4 w-4" />
							<span>Назад к выбору направлений</span>
						</Link>
					</div> */}
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-garant-navy to-garant-navy-light text-white py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Симферополь</h2>
							<MapPin className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
						<ArrowRight className="h-8 w-8 text-garant-gold" />
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Красноперекопск</h2>
							<Waves className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки {" "}
						<span className="text-garant-gold">Симферополь - Красноперекопск</span>
					</h1>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">124 км</div>
							<div className="text-sm text-gray-300">расстояние</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">
								1.5-2 часа
							</div>
							<div className="text-sm text-gray-300">время в пути</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">
								от 9000₽
							</div>
							<div className="text-sm text-gray-300">стоимость</div>
						</div>
					</div>

					<p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
						Быстрая и надежная доставка грузов из Симферополя в Красноперекопск.
						Промышленный город на севере Крыма с развитой инфраструктурой.
						Качественная перевозка машинами с пирамидой, бортовыми машинами и
						манипуляторами.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать сейчас
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-garant-gold text-garant-navy hover:bg-garant-gold hover:text-garant-navy"
							asChild
						>
							<a href="#form">Рассчитать стоимость</a>
						</Button>
					</div>
					<Discount />
				</div>
			</section>

			{/* Route Details */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-6">
								Особенности маршрута Симферополь - Красноперекопск
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Промышленный центр
										</h3>
										<p className="text-gray-600">
											Важный промышленный город на севере Крыма
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Транспортный узел
										</h3>
										<p className="text-gray-600">
											Ключевая точка для логистики северного Крыма
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Хорошая дорога
										</h3>
										<p className="text-gray-600">
											Качественное дорожное покрытие по всему маршруту
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для доставки в Красноперекопск
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">🚛 Машины с пирамидой</span>
										<span className="text-garant-gold font-semibold">
											от 9000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">📦 Бортовые машины</span>
										<span className="text-garant-gold font-semibold">
											от 9000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2">
										<span className="font-medium">🏗️ Манипуляторы</span>
										<span className="text-garant-gold font-semibold">
											от 18000₽
										</span>
									</div>
								</div>
								<div className="mt-4 text-sm text-gray-500">
									* Цены указаны за базовую услугу. Итоговая стоимость зависит
									от веса и характера груза.
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<div id="form">
				<ContactForm />
			</div>

			{/* Why Choose Us */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-garant-navy text-center mb-12">
						Почему выбирают нас для перевозок Симферополь - Красноперекопск?
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Shield className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Промышленная логистика
							</h3>
							<p className="text-gray-600">
								Специализируемся на перевозке промышленного оборудования,
								химических грузов и производственных материалов
							</p>
						</div>

						<div className="text-center">
							<Clock className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Северные маршруты
							</h3>
							<p className="text-gray-600">
								Отличное знание северных дорог Крыма и оптимальных маршрутов к
								промышленному центру
							</p>
						</div>

						<div className="text-center">
							<CheckCircle className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Безопасность грузов
							</h3>
							<p className="text-gray-600">
								Особое внимание к безопасности при перевозке химических и
								промышленных грузов
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Тяжелые грузы
							</h3>
							<p className="text-gray-600">
								Подготовленный автопарк для перевозки тяжелых промышленных
								грузов на дальние расстояния
							</p>
						</div>

						<div className="text-center">
							<Phone className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Промышленный график
							</h3>
							<p className="text-gray-600">
								Гибкий график работы, учитывающий производственные циклы и
								потребности предприятий
							</p>
						</div>

						<div className="text-center">
							<MapPin className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Оптовые скидки
							</h3>
							<p className="text-gray-600">
								Выгодные тарифы для постоянных клиентов и крупных промышленных
								заказов
							</p>
						</div>
					</div>
				</div>
			</section>

			<Directions />

			{/* Footer */}
			<footer className="bg-garant-navy text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<Truck className="h-6 w-6 text-garant-gold" />
								<span className="text-xl font-bold text-garant-gold">
									GARANT
								</span>
							</div>
							<p className="text-gray-300 text-sm">
								Профессиональные грузоперевозки по всему Крыму. Надежно, быстро,
								недорого.
							</p>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Контакты
							</h5>
							<div className="space-y-2 text-sm">
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
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Услуги
							</h5>
							<ul className="space-y-2 text-sm text-gray-300">
								<li>🚛 Машины с пирамидой</li>
								<li>📦 Бортовые машины</li>
								<li>🏗️ Манипуляторы</li>
								<li>📍 Доставка по всему Крыму</li>
							</ul>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Направления
							</h5>
							<ul className="space-y-2 text-sm text-gray-300">
								<li>
									<Link
										href="/simferopol-sevastopol"
										className="hover:text-garant-gold"
									>
										Севастополь
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-yalta"
										className="hover:text-garant-gold"
									>
										Ялта
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-dzhankoy"
										className="hover:text-garant-gold"
									>
										Джанкой
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-kerch"
										className="hover:text-garant-gold"
									>
										Керчь
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-700 mt-8 pt-8 text-center">
						<p className="text-gray-400 text-sm">
							© 2025 GARANT. Грузоперевозки по Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SimferopolKrasnoperekopsk;
