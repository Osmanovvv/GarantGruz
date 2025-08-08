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
	Building,
	Home,
	ArrowLeft
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import Discount from '@/components/Discount';
import Directions from '@/components/Directions';

export const metadata: Metadata = {
  title: 'Грузоперевозки по Симферополю | От 1500₽ за 15-60 минут | GARANT',
  description: 'Грузоперевозки по городу Симферополь от 1500₽. Доставка по всем районам: Центр, Москольцо, Каменка, Фонтаны. Газели, бортовые, манипуляторы. Быстро, аккуратно и по честной цене.',
  keywords: [
    'грузоперевозки Симферополь',
    'газель по городу',
    'доставка по Симферополю',
    'городские перевозки',
    'грузоперевозки Крым',
  ],
  openGraph: {
    title: 'Грузоперевозки по Симферополю | GARANT',
    description: 'Грузоперевозки по городу Симферополь от 1500₽. Доставка по всем районам: Центр, Москольцо, Каменка, Фонтаны. Газели, бортовые, манипуляторы.',
    url: 'https://garantgruz.ru/simferopol',
  },
  alternates: {
    canonical: 'https://garantgruz.ru/simferopol',
  },
}

	
const SimferopolCity = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки по Симферополю"
				description="Грузоперевозки по городу Симферополь от 1500₽. Доставка по всем районам: Центр, Москольцо, Каменка, Фонтаны. Газели, бортовые, манипуляторы. Быстро, аккуратно и по честной цене."
				serviceType="Городские грузоперевозки по Симферополю"
				url="https://garantgruz.ru/simferopol"
				priceRange="1500₽–4000₽"
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
						name: "Грузоперевозки по Симферополю",
						url: "https://garantgruz.ru/simferopol"
					},
				]}
				offers={[
					{
						name: "Газель по Симферополю",
						price: "1500",
						priceCurrency: "RUB",
						description: "Перевозка по городу до 3.5 тонн.",
						availability: "InStock",
					},
					{
						name: "Бортовая машина по Симферополю",
						price: "1500",
						priceCurrency: "RUB",
						description: "Доставка стройматериалов и тяжелых грузов",
						availability: "InStock",
					},
					{
						name: "Манипулятор по Симферополю",
						price: "4000",
						priceCurrency: "RUB",
						description: "Подача манипулятора для погрузки и доставки в черте города",
						availability: "InStock",
					},
				]}
			/>
			{/* Header */}
			<header className="bg-garant-navy text-white py-4 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto ">
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

			{/* Hero Section with SEO H1 */}
			<section className="bg-gradient-to-br from-garant-navy to-garant-navy-light text-white py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex items-center justify-center gap-4 mb-6">
						<Building className="h-12 w-12 text-garant-gold" />
						<h2 className="text-lg sm:text-xl font-semibold">
							Грузоперевозки по Симферополю
						</h2>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
						Грузоперевозки {" "}
						<span className="text-garant-gold">по городу Симферополь</span> -
						быстро и недорого
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
						Городские грузоперевозки по Симферополю. Перевозка мебели,
						техники, стройматериалов по районам города. Быстрая подача,
						доступные цены.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать по городу
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
								Особенности грузоперевозок по Симферополю
							</h2>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Все районы города
										</h3>
										<p className="text-gray-600">
											Центр, Москольцо, Каменка, Фонтаны, Марьино и другие
											районы
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Быстрая подача
										</h3>
										<p className="text-gray-600">
											Подача транспорта в течение 30-60 минут по городу
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-garant-gold mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-semibold text-garant-navy mb-1">
											Доступные цены
										</h3>
										<p className="text-gray-600">
											Низкие цены на городские грузоперевозки в
											Симферополе
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-4">
									Типы транспорта для городских перевозок
								</h3>
								<div className="space-y-3">
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">🚛 Машины с пирамидой</span>
										<span className="text-garant-gold font-semibold">
											от 1500₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2 border-b">
										<span className="font-medium">📦 Бортовые машины</span>
										<span className="text-garant-gold font-semibold">
											от 1500₽
										</span>
									</div>
									<div className="flex justify-between items-center py-2">
										<span className="font-medium">🏗️ Манипуляторы</span>
										<span className="text-garant-gold font-semibold">
											от 4000₽
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

			{/* City Districts Coverage */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-garant-navy text-center mb-12">
						Районы Симферополя, где работают наши машины
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Building className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Центр</h3>
								<p className="text-sm text-gray-600">
									Центральный район, Театральная, пр. Кирова
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Home className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">ЖД Вокзал</h3>
								<p className="text-sm text-gray-600">
									Привокзальный район, Евпаторийское шоссе
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Building className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Залесье</h3>
								<p className="text-sm text-gray-600">
									Залесский район, новостройки
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Home className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Фонтаны</h3>
								<p className="text-sm text-gray-600">
									Фонтанский район, частный сектор
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Building className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Каменка</h3>
								<p className="text-sm text-gray-600">
									Каменский район, спальные районы
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Home className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Марьино</h3>
								<p className="text-sm text-gray-600">
									Марьинский район, окраины города
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Building className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Аэропорт</h3>
								<p className="text-sm text-gray-600">
									Район аэропорта, промзона
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 hover:shadow-lg transition-shadow">
							<CardContent className="p-0 text-center">
								<Home className="h-8 w-8 text-garant-gold mx-auto mb-2" />
								<h3 className="font-bold text-garant-navy mb-1">Дубки</h3>
								<p className="text-sm text-gray-600">
									Дубковский район, новые кварталы
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* City Services */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-garant-navy text-center mb-12">
						Услуги грузоперевозок по Симферополю
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<Home className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Переезды по городу
							</h3>
							<p className="text-gray-600">
								Перевозка мебели и личных вещей при переезде в пределах
								Симферополя. Грузчики, упаковка, разборка мебели.
							</p>
						</div>

						<div className="text-center">
							<Building className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Доставка стройматериалов
							</h3>
							<p className="text-gray-600">
								Перевозка кирпича, блоков, цемента, труб на стройплощадки и
								частные объекты по всему городу.
							</p>
						</div>

						<div className="text-center">
							<Truck className="h-16 w-16 text-garant-gold mx-auto mb-4" />
							<h3 className="text-xl font-bold text-garant-navy mb-3">
								Доставка техники
							</h3>
							<p className="text-gray-600">
								Перевозка бытовой техники, холодильников, стиральных машин по
								магазинам и квартирам Симферополя.
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
										грузоперевозки по Симферополю
									</p>
								</div>
							</div>
							<p className="text-gray-300">
								Быстрые и надежные грузоперевозки по всем районам
								Симферополя
							</p>
						</div>

						<div>
							<h5 className="text-lg font-semibold mb-4 text-garant-gold">
								Заказ машины по городу
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
								Междугородние перевозки
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
										href="/simferopol-yalta"
										className="text-gray-300 hover:text-garant-gold transition-colors"
									>
										Симферополь - Ялта
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
							© 2025 GARANT. Городские грузоперевозки Симферополь. Все права
							защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SimferopolCity;
