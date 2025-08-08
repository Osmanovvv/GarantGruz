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
	Waves,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Directions from '@/components/Directions';
import Discount from '@/components/Discount';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Грузоперевозки Симферополь - Ялта',
	description: 'Доставка грузов из Симферополя в Ялту за 1.5-2 часа. 90 км, от 7000₽. Быстрая и надежная перевозка в курортную столицу Крыма. Все типы транспорта.',
	keywords: [
		'грузоперевозки Симферополь Ялта',
		'газель Ялта',
		'доставка Ялта',
		'перевозка грузов Ялта',
	],
	openGraph: {
		title: 'Грузоперевозки Симферополь - Ялта | GARANT',
		description: 'Доставка грузов из Симферополя в Ялту за 1.5-2 часа. 90 км, от 7000₽.',
		url: 'https://garantgruz.ru/simferopol-yalta',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/simferopol-yalta',
	},
}

const SimferopolYalta = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки Симферополь - Ялта"
				description="Доставка грузов из Симферополя в Ялту за 1.5-2 часа. 90 км, от 7000₽. Быстрая и надежная перевозка в курортную столицу Крыма. Все типы транспорта."
				serviceType="Грузоперевозки Симферополь - Ялта"
				url="https://garantgruz.ru/simferopol-yalta"
				priceRange="7000₽-15000₽"
				offers={[
					{
						name: "Машина с пирамидой до Ялты",
						price: "7000",
						priceCurrency: "RUB",
						description: "90 км, 1.5-2 часа в пути",
						availability: "InStock",
					},
					{
						name: "Бортовая машина до Ялты",
						price: "7000",
						priceCurrency: "RUB",
						description: "Для тяжелых грузов, 90 км",
						availability: "InStock",
					},
					{
						name: "Манипулятор до Ялты",
						price: "15000",
						priceCurrency: "RUB",
						description: "С услугами подъема, 90 км",
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
							href=	"/"
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
							<h2 className="text-lg sm:text-xl font-semibold">Ялта</h2>
							<Waves className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки{" "}
						<span className="text-garant-gold">Симферополь - Ялта</span>
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						Безопасная доставка грузов на популярный курорт Южного берега Крыма
						через живописные горные серпантины
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать перевозку
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-garant-gold text-garant-navy hover:bg-garant-gold hover:text-garant-navy"
							asChild
						>
							<a href="#form">Оставить заявку</a>
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
								Особенности маршрута Симферополь - Ялта
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Горная дорога
										</h3>
										<p className="text-gray-600">
											Живописный маршрут через горный серпантин
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Курортная зона
										</h3>
										<p className="text-gray-600">
											96 км до главного курорта южного берега Крыма
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Круглогодичная доставка
										</h3>
										<p className="text-gray-600">
											Ялта - популярное направление в любое время года
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для доставки в Ялту
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">🚛 Машины с пирамидой</span>
										<span className="text-garant-gold font-semibold">
											от 7000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">📦 Бортовые машины</span>
										<span className="text-garant-gold font-semibold">
											от 7000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2">
										<span className="font-medium">🏗️ Манипуляторы</span>
										<span className="text-garant-gold font-semibold">
											от 15000₽
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
						Почему выбирают нас для перевозок Симферополь - Ялта?
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Shield className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Опыт горных перевозок
							</h3>
							<p className="text-gray-600">
								Наши водители имеют большой опыт езды по горным серпантинам и
								знают все особенности дороги на Ялту
							</p>
						</div>

						<div className="text-center">
							<Waves className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Курортная логистика
							</h3>
							<p className="text-gray-600">
								Понимаем специфику доставки в курортной зоне, включая сезонные
								особенности и ограничения
							</p>
						</div>

						<div className="text-center">
							<Clock className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Планирование времени
							</h3>
							<p className="text-gray-600">
								Учитываем дорожную ситуацию и планируем оптимальное время
								доставки с учетом загруженности трассы
							</p>
						</div>

						<div className="text-center">
							<CheckCircle className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Безопасность груза
							</h3>
							<p className="text-gray-600">
								Специальное крепление и упаковка груза для безопасной перевозки
								по горным дорогам
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Техническая готовность
							</h3>
							<p className="text-gray-600">
								Все автомобили проходят дополнительную проверку перед горными
								маршрутами
							</p>
						</div>

						<div className="text-center">
							<Phone className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Постоянная связь
							</h3>
							<p className="text-gray-600">
								Отслеживание груза и постоянная связь с водителем на всем
								протяжении маршрута
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
									<p className="text-sm text-gray-300">грузовые перевозки</p>
								</div>
							</div>
							<p className="text-gray-300">
								Надежные грузоперевозки между Симферополем и Ялтой
							</p>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Контакты
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
								Другие направления
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
										href="/simferopol-bakhchisaray"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										Симферополь - Бахчисарай
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
						<p className="text-gray-300">© 2025 GARANT. Все права защищены.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SimferopolYalta;
