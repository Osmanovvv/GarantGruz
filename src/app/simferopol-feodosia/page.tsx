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
	Waves,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Directions from '@/components/Directions';
import Discount from '@/components/Discount';
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Грузоперевозки Симферополь - Феодосия | От 8000₽ | GARANT',
	description: 'Доставка грузов из Симферополя в Феодосию за 2–2.5 часа. 124 км, от 8000₽. Перевозка в древний портовый город на восточном побережье Крыма. Газели, бортовые, манипуляторы. Надежно и быстро.',
	keywords: [
		'грузоперевозки Симферополь Феодосия',
		'газель Феодосия',
		'бортовая машина Феодосия',
		'манипулятор Феодосия',
		'грузоперевозки Крым',
	],
	openGraph: {
		title: 'Грузоперевозки Симферополь - Феодосия | GARANT',
		description: 'Доставка грузов из Симферополя в Феодосию за 2–2.5 часа. 124 км, от 8000₽. Перевозка в древний портовый город на восточном побережье Крыма. Газели, бортовые, манипуляторы. Надежно и быстро.',
		url: 'https://garantgruz.ru/simferopol-feodosia',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/simferopol-feodosia',
	},
}

const SimferopolFeodosia = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки Симферополь - Феодосия"
				description="Доставка грузов из Симферополя в Феодосию за 2–2.5 часа. 124 км, от 8000₽. Перевозка в древний портовый город на восточном побережье Крыма. Газели, бортовые, манипуляторы. Надежно и быстро."
				serviceType="Грузоперевозки Симферополь - Феодосия"
				url="https://garantgruz.ru/simferopol-feodosia"
				priceRange="8000₽–17000₽"
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
						name: "Симферополь - Феодосия",
						url: "https://garantgruz.ru/simferopol-feodosia",
					},
				]}
				offers={[
					{
						name: "Газель с пирамидой до Феодосии",
						price: "8000",
						priceCurrency: "RUB",
						description: "Доставка стекла и мебели на 124 км",
						availability: "InStock",
					},
					{
						name: "Бортовая машина до Феодосии",
						price: "8000",
						priceCurrency: "RUB",
						description: "Перевозка паллет, кирпича, блоков",
						availability: "InStock",
					},
					{
						name: "Манипулятор до Феодосии",
						price: "17000",
						priceCurrency: "RUB",
						description: "С подъемом груза. Восточный маршрут",
						availability: "InStock",
					},
				]}
			/>
			
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
					<Button
						className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
						asChild
					>
						<a href="tel:+79788631197">Позвонить</a>
					</Button>
				</div>
			</header>

			<section className="bg-gradient-to-br from-garant-navy to-garant-navy-light text-white py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Симферополь</h2>
							<MapPin className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
						<ArrowRight className="h-8 w-8 text-garant-gold" />
						<div className="text-center">
							<h2 className="text-lg sm:text-xl font-semibold">Феодосия</h2>
							<Waves className="h-6 w-6 mx-auto mt-2 text-garant-gold" />
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки {" "}
						<span className="text-garant-gold">Симферополь - Феодосия</span>
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						Профессиональные грузоперевозки в древнюю Феодосию.
						Доставка грузов в портовый и курортный город с гарантией
						сохранности.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать грузоперевозку
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
								Особенности маршрута Симферополь - Феодосия
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Культурный центр
										</h3>
										<p className="text-gray-600">
											124 км до города-музея с богатой историей
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Морской порт
										</h3>
										<p className="text-gray-600">
											Феодосия - важный порт на восточном побережье
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Курорт и история
										</h3>
										<p className="text-gray-600">
											Сочетание пляжного отдыха и культурных
											достопримечательностей
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для доставки в Феодосию
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">🚛 Машины с пирамидой</span>
										<span className="text-garant-gold font-semibold">
											от 8000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">📦 Бортовые машины</span>
										<span className="text-garant-gold font-semibold">
											от 8000₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2">
										<span className="font-medium">🏗️ Манипуляторы</span>
										<span className="text-garant-gold font-semibold">
											от 17000₽
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

			<div id="form">
				<ContactForm />
			</div>

			{/* Why Choose Us */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-garant-navy text-center mb-12">
						Почему выбирают нас для перевозок Симферополь - Феодосия?
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Shield className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Опыт дальних перевозок
							</h3>
							<p className="text-gray-600">
								Наши водители имеют большой опыт перевозок на расстояние 124 км
								и знают все особенности дороги в Феодосию
							</p>
						</div>

						<div className="text-center">
							<Clock className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Точное планирование времени
							</h3>
							<p className="text-gray-600">
								Учитываем дорожную ситуацию и планируем оптимальное время
								доставки в город-музей с учетом трафика
							</p>
						</div>

						<div className="text-center">
							<CheckCircle className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Безопасность ценных грузов
							</h3>
							<p className="text-gray-600">
								Специальное внимание к перевозке антиквариата, произведений
								искусства и других ценных предметов
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Надежная техника
							</h3>
							<p className="text-gray-600">
								Все автомобили проходят тщательную проверку перед дальними
								маршрутами для гарантии надежности
							</p>
						</div>

						<div className="text-center">
							<Phone className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Постоянная связь
							</h3>
							<p className="text-gray-600">
								Отслеживание груза и постоянная связь с водителем на всем
								протяжении маршрута до Феодосии
							</p>
						</div>

						<div className="text-center">
							<MapPin className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Знание города
							</h3>
							<p className="text-gray-600">
								Отличное знание Феодосии и всех районов города для быстрой и
								точной доставки по адресу
							</p>
						</div>
					</div>
				</div>
			</section>

			<Directions />

			<footer className="bg-garant-navy text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p className="text-gray-300">
						© 2025 GARANT. Грузоперевозки Симферополь - Феодосия. Все права
						защищены.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default SimferopolFeodosia;
