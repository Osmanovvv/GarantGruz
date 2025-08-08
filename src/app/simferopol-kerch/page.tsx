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
	Ship,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Directions from '@/components/Directions';
import Discount from '@/components/Discount';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Грузоперевозки Симферополь - Керчь | От 11000₽ | GARANT',
	description: 'Доставка грузов из Симферополя в Керчь за 2.5–3 часа. 210 км, от 11000₽. Надежная перевозка в портовый город. Газели, бортовые, манипуляторы.',
	keywords: [
		'грузоперевозки Симферополь Керчь',
		'газель Керчь',
		'бортовая машина Керчь',
		'манипулятор Керчь',
		'грузоперевозки Крым',
	],
	openGraph: {
		title: 'Грузоперевозки Симферополь - Керчь | GARANT',
		description: 'Доставка грузов из Симферополя в Керчь за 2.5–3 часа. 210 км, от 11000₽. Надежная перевозка в портовый город. Газели, бортовые, манипуляторы.',
		url: 'https://garantgruz.ru/simferopol-kerch',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/simferopol-kerch',
	},
};

const SimferopolKerch = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки Симферополь - Керчь"
				description="Доставка грузов из Симферополя в Керчь за 2.5–3 часа. 210 км, от 11000₽. Надежная перевозка в портовый город. Газели, бортовые, манипуляторы."
				serviceType="Грузоперевозки Симферополь - Керчь"
				url="https://garantgruz.ru/simferopol-kerch"
				priceRange="11000₽–25000₽"
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
						name: "Симферополь - Керчь",
						url: "https://garantgruz.ru/simferopol-kerch",
					},
				]}
				offers={[
					{
						name: "Газель с пирамидой до Керчи",
						price: "11000",
						priceCurrency: "RUB",
						description: "Перевозка стекла, окон и другого",
						availability: "InStock",
					},
					{
						name: "Бортовая машина до Керчи",
						price: "11000",
						priceCurrency: "RUB",
						description: "Для стройматериалов и объемных грузов",
						availability: "InStock",
					},
					{
						name: "Манипулятор до Керчи",
						price: "25000",
						priceCurrency: "RUB",
						description: "С подъемом и разгрузкой. 210 км в пути",
						availability: "InStock",
					},
				]}
			/>
			{/* Header */}
			<header className="bg-garant-navy text-white py-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
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
			</header>

			{/* Hero Section with SEO H1 */}
			<section className="bg-gradient-to-br from-garant-navy to-garant-navy-light text-white py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Симферополь</h2>
							<MapPin className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
						<ArrowRight className="h-8 w-8 text-garant-gold" />
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Керчь</h2>
							<Ship className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки {" "}
						<span className="text-garant-gold">Симферополь - Керчь</span> -
						надежная доставка на 210 км
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						Профессиональные грузоперевозки по дальнему маршруту
						Симферополь-Керчь. Доставка грузов в портовый город Керчь с полной
						гарантией сохранности.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать грузоперевозку в Керчь
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-garant-gold text-garant-navy hover:bg-garant-gold hover:text-garant-navy"
							asChild
						>
							<a href="#form">Рассчитать стоимость доставки</a>
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
								Особенности маршрута Симферополь - Керчь
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Длинный маршрут
										</h3>
										<p className="text-gray-600">
											210 км через весь полуостров до портового города
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Крымский мост
										</h3>
										<p className="text-gray-600">
											Керчь - ворота Крыма, связанные с материковой Россией
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Промышленный центр
										</h3>
										<p className="text-gray-600">
											Важный портовый и промышленный центр востока Крыма
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для доставки в Керчь
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

			{/* Why Choose Us for Kerch Freight */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-garant-navy text-center mb-12">
						Преимущества дальних грузоперевозок Симферополь - Керчь с GARANT
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Ship className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Портовая логистика
							</h3>
							<p className="text-gray-600">
								Опыт доставки грузов в портовую зону Керчи, знание особенностей
								портовых ограничений и оптимальных маршрутов подъезда
							</p>
						</div>

						<div className="text-center">
							<Shield className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Дальние перевозки
							</h3>
							<p className="text-gray-600">
								Специализируемся на дальних маршрутах по Крыму. Опытные
								водители, подготовленный транспорт для поездок на 200+ км
							</p>
						</div>

						<div className="text-center">
							<Clock className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Планирование маршрута
							</h3>
							<p className="text-gray-600">
								Точное планирование времени доставки с учетом дорожной ситуации
								на трассе Симферополь-Керчь
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Надежный транспорт
							</h3>
							<p className="text-gray-600">
								Все машины готовы к дальним рейсам,
								дополнительная страховка для междугородних перевозок
							</p>
						</div>

						<div className="text-center">
							<CheckCircle className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Фиксированные тарифы
							</h3>
							<p className="text-gray-600">
								Честные цены на дальние перевозки без скрытых доплат за
								километраж и время в пути
							</p>
						</div>

						<div className="text-center">
							<Phone className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Связь в пути
							</h3>
							<p className="text-gray-600">
								Отслеживание груза на всем протяжении маршрута, регулярные
								уведомления о местоположении
							</p>
						</div>
					</div>
				</div>
			</section>

			<Directions />

			{/* Footer */}
			<footer className="bg-garant-navy text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-8">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<Truck className="h-8 w-8 text-garant-gold" />
								<div>
									<h4 className="text-2xl font-bold text-garant-gold">
										GARANT
									</h4>
									<p className="text-sm text-gray-300">
										дальние грузоперевозки по Крыму
									</p>
								</div>
							</div>
							<p className="text-gray-300">
								Надежные грузоперевозки на дальние расстояния по
								маршруту Симферополь-Керчь
							</p>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Заказ грузоперевозки в Керчь
							</h5>
							<div className="space-y-3">
								<div className="flex items-center gap-2">
									<Phone className="h-4 w-4" />
									<a
										href="tel:+79788631197"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										+7 (978) 863-11-97
									</a>
								</div>
								<div className="flex items-center gap-2">
									<Mail className="h-4 w-4" />
									<a
										href="mailto:ilyas-crimea@mail.ru"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										ilyas-crimea@mail.ru
									</a>
								</div>
							</div>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Популярные направления
							</h5>
							<ul className="space-y-2">
								<li>
									<Link
										href="/simferopol-sevastopol"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										Симферополь - Севастополь
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-feodosia"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										Симферополь - Феодосия
									</Link>
								</li>
								<li>
									<Link
										href="/"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										Все направления
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-garant-navy-light mt-8 pt-8 text-center">
						<p className="text-gray-300">
							© 2025 GARANT. Грузоперевозки по Крыму. Все права
							защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SimferopolKerch;
