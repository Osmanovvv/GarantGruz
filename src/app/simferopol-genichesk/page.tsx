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
	Home,
	Waves,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Directions from '@/components/Directions';
import Discount from '@/components/Discount';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Грузоперевозки Симферополь - Геническ | От 11000₽ | GARANT',
	description: 'Доставка грузов из Симферополя в Геническ за 2.5-3 часа. 172 км, от 11000₽. Перевозка в курортный город на Азовском море. Все типы транспорта.',
	keywords: [
		'грузоперевозки Симферополь Геническ',
		'машина с пирамидой Геническ',
		'бортовая машина Геническ',
		'манипулятор Геническ',
		'грузоперевозки Крым',
	],
	openGraph: {
		title: 'Грузоперевозки Симферополь - Геническ | GARANT',
		description: 'Доставка грузов из Симферополя в Геническ за 2.5-3 часа. 172 км, от 11000₽. Перевозка в курортный город на Азовском море. Все типы транспорта.',
		url: 'https://garantgruz.ru/simferopol-genichesk',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/simferopol-genichesk',
	},
}

const SimferopolGenicheskhesk = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки Симферополь - Геническ"
				description="Доставка грузов из Симферополя в Геническ за 2.5-3 часа. 172 км, от 11000₽. Перевозка в курортный город на Азовском море. Все типы транспорта."
				serviceType="Грузоперевозки Симферополь - Геническ"
				url="https://garantgruz.ru/simferopol-genicheskhesk"
				priceRange="11000₽-25000₽"
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
						name: "Симферополь - Геническ",
						url: "https://garantgruz.ru/simferopol-genicheskhesk",
					},
				]}
				offers={[
					{
						name: "Машина с пирамидой до Генического",
						price: "11000",
						priceCurrency: "RUB",
						description: "172 км, 2.5-3 часа в пути",
						availability: "InStock",
					},
					{
						name: "Бортовая машина до Генического",
						price: "11000",
						priceCurrency: "RUB",
						description: "Для тяжелых грузов, 172 км",
						availability: "InStock",
					},
					{
						name: "Манипулятор до Генического",
						price: "25000",
						priceCurrency: "RUB",
						description: "С услугами подъема, 172 км",
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
							<h2 className="text-lg sm:text-xl font-semibold">Геническ</h2>
							<Waves className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки {" "}
						<span className="text-garant-gold">Симферополь - Геническ</span>
					</h1>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">172 км</div>
							<div className="text-sm text-gray-300">расстояние</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">
								2.5-3 часа
							</div>
							<div className="text-sm text-gray-300">время в пути</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">
								от 11000₽
							</div>
							<div className="text-sm text-gray-300">стоимость</div>
						</div>
					</div>

					<p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
						Быстрая и надежная доставка грузов из Симферополя в Геническ.
						Курортный город на берегу Азовского моря с развитой туристической
						инфраструктурой. Качественная перевозка машинами с пирамидой,
						бортовыми машинами и манипуляторами.
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
								Особенности маршрута Симферополь - Геническ
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Азовское море
										</h3>
										<p className="text-gray-600">
											Путь к популярному курорту на Азовском побережье
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Курортный город
										</h3>
										<p className="text-gray-600">
											Геническ известен своими песчаными пляжами и теплым морем
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Северное направление
										</h3>
										<p className="text-gray-600">
											Удобный маршрут в северо-восточную часть Крыма
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для доставки в Геническ
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">🚛 Машины с пирамидой</span>
										<span className="text-garant-gold font-semibold">
											от 11000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">📦 Бортовые машины</span>
										<span className="text-garant-gold font-semibold">
											от 11000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2">
										<span className="font-medium">🏗️ Манипуляторы</span>
										<span className="text-garant-gold font-semibold">
											от 25000₽
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
						Почему выбирают нас для перевозок Симферополь - Геническ?
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Shield className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Арабатский опыт
							</h3>
							<p className="text-gray-600">
								Отличное знание дорог к Арабатской стрелке и специфики
								прибрежных курортов Азовского моря
							</p>
						</div>

						<div className="text-center">
							<Clock className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Семейная логистика
							</h3>
							<p className="text-gray-600">
								Специализация на перевозке семейного инвентаря, детских товаров
								и пляжного оборудования
							</p>
						</div>

						<div className="text-center">
							<CheckCircle className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Рыболовные грузы
							</h3>
							<p className="text-gray-600">
								Опыт перевозки рыболовного снаряжения, лодок и оборудования для
								морской рыбалки
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Прибрежные дороги
							</h3>
							<p className="text-gray-600">
								Автомобили адаптированы для поездок по прибрежным и степным
								дорогам к морю
							</p>
						</div>

						<div className="text-center">
							<Phone className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Сезонный сервис
							</h3>
							<p className="text-gray-600">
								Учитываем летний наплыв туристов и планируем оптимальные
								маршруты доставки
							</p>
						</div>

						<div className="text-center">
							<MapPin className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Конкурентные цены
							</h3>
							<p className="text-gray-600">
								Справедливые тарифы на дальние перевозки к Азовскому морю без
								лишних наценок
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
										href="/simferopol-kerch"
										className="hover:text-garant-gold"
									>
										Керчь
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-feodosia"
										className="hover:text-garant-gold"
									>
										Феодосия
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
										href="/simferopol-sudak"
										className="hover:text-garant-gold"
									>
										Судак
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

export default SimferopolGenicheskhesk;
