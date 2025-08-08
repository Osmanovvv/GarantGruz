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
	Package,
	Home,
	Users,
	Star,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Discount from '@/components/Discount';

export const metadata: Metadata = {
	title: 'Машины с пирамидой в Крыму | Грузоперевозки от 1500₽ | GARANT',
	description: 'Услуги машин с пирамидой по Крыму от 1500₽. Перевозка мебели, объемных грузов, переезды. Грузоподъемность до 5 тонн, длина кузова 3-6 метров. Аккуратная доставка по всему Крыму.',
	keywords: [
		'машины с пирамидой Крым',
		'газель с пирамидой',
		'перевозка мебели',
		'переезд Симферополь',
		'объемные грузы',
		'грузоперевозки Крым',
	],
	openGraph: {
		title: 'Машины с пирамидой в Крыму | GARANT',
		description: 'Услуги машин с пирамидой по Крыму от 1500₽. Перевозка мебели, объемных грузов, переезды. Аккуратная доставка по всему Крыму.',
		url: 'https://garantgruz.ru/pyramid',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/pyramid',
	},
}


const PyramidServices = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Машины с пирамидой"
				description="Услуги машин с пирамидой по Крыму от 1500₽. Перевозка мебели, объемных грузов, переезды. Грузоподъемность до 5 тонн, длина кузова 3-6 метров. Аккуратная доставка по всему Крыму."
				serviceType="Перевозка грузов машинами с пирамидой"
				url="https://garantgruz.ru/pyramid"
				priceRange="1500₽-20000₽"
				breadcrumbs={[
					{
						name: "Главная",
						url: "https://garantgruz.ru",
					},
					{
						name: "Услуги",
						url: "https://garantgruz.ru/#services",
					},
					{
						name: "Машины с пирамидой",
						url: "https://garantgruz.ru/pyramid",
					},
				]}
				offers={[
					{
						name: "Перевозка по городу",
						price: "1500",
						priceCurrency: "RUB",
						description: "Доставка в пределах Симферополя",
						availability: "InStock",
					},
					{
						name: "Перевозка стройматериалов",
						price: "1500",
						priceCurrency: "RUB",
						description: "Доставка по Крыму",
						availability: "InStock",
					},
					{
						name: "Тяжелые грузы до 5 тонн",
						price: "4000",
						priceCurrency: "RUB",
						description: "Перевозка стекла, окон и другого",
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
					<div className="mb-6">
						<div className="text-6xl sm:text-7xl mb-4">🚛</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Услуги машин с пирамидой в Крыму
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						Надёжная перевозка стекла, окон, рам и строительных материалов машинами с пирамидой.
						Идеальный транспорт для доставки хрупких и длинномерных грузов по всему Крыму.
					</p>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">до 5т</div>
							<div className="text-sm text-gray-300">грузоподъемность</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">3-6м</div>
							<div className="text-sm text-gray-300">длина кузова</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-garant-gold">от 1500₽</div>
							<div className="text-sm text-gray-300">стоимость</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать машину с пирамидой
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

			{/* Contact Form */}
			<div id="form">
				<ContactForm />
			</div>

			{/* Service Details */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Что такое машины с пирамидой и для чего они нужны?
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Машины с пирамидой — это специальные открытые автомобили с металлической конструкцией по бокам кузова. Они предназначены для безопасной перевозки стекла, окон, витражей и других хрупких или габаритных материалов.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h3 className="text-xl font-bold text-garant-navy mb-6">
								Преимущества машин с пирамидой
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Надёжная фиксация стекла и рам
										</h4>
										<p className="text-gray-600">
											Пирамида позволяет надёжно закрепить хрупкий груз и предотвратить повреждения при перевозке
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Удобная загрузка и выгрузка
										</h4>
										<p className="text-gray-600">
											Открытая платформа обеспечивает быстрый доступ к грузу с любой стороны
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Безопасная перевозка длинномерных изделий
										</h4>
										<p className="text-gray-600">
											Конструкция кузова позволяет перевозить изделия длиной до 6 метров
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-6">
									Что можно перевозить машинами с пирамидой
								</h3>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Shield className="h-5 w-5 text-garant-gold" />
										<span>Стеклопакеты и оконные рамы</span>
									</div>
									<div className="flex items-center gap-3">
										<Home className="h-5 w-5 text-garant-gold" />
										<span>Стекло, витражи и зеркала</span>
									</div>
									<div className="flex items-center gap-3">
										<Package className="h-5 w-5 text-garant-gold" />
										<span>Пластиковый и алюминиевый профиль</span>
									</div>
									<div className="flex items-center gap-3">
										<Truck className="h-5 w-5 text-garant-gold" />
										<span>Длинномерные строительные материалы</span>
									</div>
									<div className="flex items-center gap-3">
										<Star className="h-5 w-5 text-garant-gold" />
										<span>Хрупкие товары с нестандартной формой</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle className="h-5 w-5 text-garant-gold" />
										<span>Продукция для магазинов и строительных компаний</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Pricing Table */}
					<div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
						<h3 className="text-2xl font-bold text-garant-navy mb-6 text-center">
							Стоимость услуг машин с пирамидой по Крыму
						</h3>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200">
										<th className="text-left py-3 font-semibold text-garant-navy">
											Направление
										</th>
										<th className="text-center py-3 font-semibold text-garant-navy">
											Расстояние
										</th>
										<th className="text-center py-3 font-semibold text-garant-navy">
											Время в пути
										</th>
										<th className="text-right py-3 font-semibold text-garant-navy">
											Стоимость
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-gray-100">
										<td className="py-3">По городу Симферополь</td>
										<td className="text-center py-3">-</td>
										<td className="text-center py-3">30-60 мин</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 1500₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Бахчисарай</td>
										<td className="text-center py-3">31 км</td>
										<td className="text-center py-3">35-45 мин</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 3500₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Алушта</td>
										<td className="text-center py-3">54 км</td>
										<td className="text-center py-3">50-70 мин</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 5000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Евпатория</td>
										<td className="text-center py-3">75 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 5000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Севастополь</td>
										<td className="text-center py-3">79 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 6000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Ялта</td>
										<td className="text-center py-3">90 км</td>
										<td className="text-center py-3">1.5-2 часа</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 7000₽
										</td>
									</tr>
									<tr>
										<td className="py-3">Симферополь - Керчь</td>
										<td className="text-center py-3">210 км</td>
										<td className="text-center py-3">2.5-3 часа</td>
										<td className="text-right py-3 text-garant-gold font-semibold">
											от 11000₽
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<p className="text-sm text-gray-500 mt-4">
							* Цены указаны за базовую услугу. Скидка 10% при заказе онлайн.
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Почему выбирают наши машины с пирамидой
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors">
							<CardContent className="p-0">
								<Shield className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Опытные водители
								</h3>
								<p className="text-gray-600 text-sm">
									Знают все особенности перевозки хрупких и объемных грузов
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors">
							<CardContent className="p-0">
								<Clock className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Быстрая подача
								</h3>
								<p className="text-gray-600 text-sm">
									Машина прибудет к вам в течение 30-60 минут
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-garant-gold/20 hover:border-garant-gold transition-colors">
							<CardContent className="p-0">
								<Shield className="h-12 w-12 text-garant-gold mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Надежное крепление
								</h3>
								<p className="text-gray-600 text-sm">
									Профессиональная фиксация грузов для безопасной перевозки
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
							Профессиональные услуги машин с пирамидой по всему Крыму
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
							© 2025 GARANT. Машины с пирамидой в Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default PyramidServices;
