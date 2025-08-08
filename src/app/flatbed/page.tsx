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
	Wrench,
	Users,
	Star,
	Weight,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";

export const metadata: Metadata = {
	title: 'Бортовые машины | Услуги грузоперевозок по Крыму от 1500₽ | GARANT',
	description: 'Услуги бортовых машин по Крыму от 1500₽. Перевозка стройматериалов, тяжелых грузов, паллет. Грузоподъемность до 5 тонн, длина кузова 4-6 метров. Надежная доставка.',
	keywords: [
		'бортовые машины Крым',
		'газель бортовая',
		'перевозка стройматериалов',
		'тяжелые грузы Симферополь',
		'грузоперевозки Крым',
		'аренда бортовых машин',
	],
	openGraph: {
		title: 'Бортовые машины | GARANT - грузоперевозки по Крыму',
		description: 'Услуги бортовых машин по Крыму от 1500₽. Перевозка стройматериалов, тяжелых грузов, паллет. Надежная доставка.',
		url: 'https://garantgruz.ru/flatbed',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/flatbed',
	},
};


const FlatbedServices = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Бортовые машины"
				description="Услуги бортовых машин по Крыму от 1500₽. Перевозка стройматериалов, тяжелых грузов, паллет. Грузоподъемность до 5 тонн, длина кузова 4-6 метров. Надежная доставка."
				serviceType="Перевозка грузов бортовыми машинами"
				url="https://garantgruz.ru/flatbed"
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
						name: "Бортовые машины",
						url: "https://garantgruz.ru/flatbed",
					},
				]}
				offers={[
					{
						name: "Перевозка стройматериалов",
						price: "1500",
						priceCurrency: "RUB",
						description: "Доставка кирпича, блоков, цемента",
						availability: "InStock",
					},
					{
						name: "Паллетные грузы",
						price: "1500",
						priceCurrency: "RUB",
						description: "Перевозка товаров на паллетах",
						availability: "InStock",
					},
					{
						name: "Тяжелые грузы до 5 тонн",
						price: "4000",
						priceCurrency: "RUB",
						description: "Металлоконструкции, оборудование",
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
							<span>Назад к выбору направлений</span>
						</Link>
					</div> */}
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-gray-50 py-16 sm:py-20 border-t-4 border-blue-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="mb-6">
						<div className="text-6xl sm:text-7xl mb-4">📦</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-garant-navy">
						Услуги бортовых машин в Крыму
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
						Надежная перевозка тяжелых грузов бортовыми машинами. Идеально
						подходят для стройматериалов, металлоконструкций и паллетных грузов.
					</p>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">до 5т</div>
							<div className="text-sm text-gray-500">грузоподъемность</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">4-6м</div>
							<div className="text-sm text-gray-500">длина кузова</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">от 1500₽</div>
							<div className="text-sm text-gray-500">стоимость</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать бортовую машину
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
							asChild
						>
							<a href="#form">Рассчитать стоимость</a>
						</Button>
					</div>
					<div className="mt-6 sm:mt-8 inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow ring-1 ring-black/10 hover:shadow-md transition duration-300 text-xs xs:text-sm sm:text-base mx-2 xs:mx-0">
						<span className="hidden xs:inline">
							🎁 Скидка 10% для новых клиентов при заказе через сайт
						</span>
						<span className="xs:hidden">-10% онлайн-заказ 🎁</span>
					</div>
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
							Что такое бортовые машины и их преимущества
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Бортовые машины имеют открытый кузов с откидными бортами для
							удобной погрузки тяжелых и габаритных грузов
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h3 className="text-xl font-bold text-garant-navy mb-6">
								Преимущества бортовых машин
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Высокая грузоподъемность
										</h4>
										<p className="text-gray-600">
											Выдерживают грузы весом до 5 тонн
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Откидные борта
										</h4>
										<p className="text-gray-600">
											Удобная загрузка с любой стороны машины
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Прочная платформа
										</h4>
										<p className="text-gray-600">
											Усиленное дно выдерживает точечные нагрузки
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Возможность крепления
										</h4>
										<p className="text-gray-600">
											Специальные крепления для фиксации груза
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6 border-2 border-blue-500">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-6">
									Что можно перевозить бортовыми машинами
								</h3>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Wrench className="h-5 w-5 text-blue-600" />
										<span>Стройматериалы (кирпич, блоки, цемент)</span>
									</div>
									<div className="flex items-center gap-3">
										<Weight className="h-5 w-5 text-blue-600" />
										<span>Металлические конструкции и арматура</span>
									</div>
									<div className="flex items-center gap-3">
										<Package className="h-5 w-5 text-blue-600" />
										<span>Паллетные грузы и товары на поддонах</span>
									</div>
									<div className="flex items-center gap-3">
										<Truck className="h-5 w-5 text-blue-600" />
										<span>Оборудование и станки</span>
									</div>
									<div className="flex items-center gap-3">
										<Shield className="h-5 w-5 text-blue-600" />
										<span>Тротуарная плитка и камень</span>
									</div>
									<div className="flex items-center gap-3">
										<Star className="h-5 w-5 text-blue-600" />
										<span>Сыпучие материалы в мешках</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Pricing Table */}
					<div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
						<h3 className="text-2xl font-bold text-garant-navy mb-6 text-center">
							Стоимость услуг бортовых машин по Крыму
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
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 1500₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Бахчисарай</td>
										<td className="text-center py-3">31 км</td>
										<td className="text-center py-3">35-45 мин</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 3500₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Алушта</td>
										<td className="text-center py-3">54 км</td>
										<td className="text-center py-3">50-70 мин</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 5000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Евпатория</td>
										<td className="text-center py-3">75 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 5000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Севастополь</td>
										<td className="text-center py-3">79 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 6000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Ялта</td>
										<td className="text-center py-3">90 км</td>
										<td className="text-center py-3">1.5-2 часа</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
											от 7000₽
										</td>
									</tr>
									<tr>
										<td className="py-3">Симферополь - Керчь</td>
										<td className="text-center py-3">210 км</td>
										<td className="text-center py-3">2.5-3 часа</td>
										<td className="text-right py-3 text-blue-600 font-semibold">
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
							Почему выбирают наши бортовые машины
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="p-6 text-center border-2 border-blue-500/20 hover:border-blue-500 transition-colors">
							<CardContent className="p-0">
								<Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Надежное крепление
								</h3>
								<p className="text-gray-600 text-sm">
									Профессиональная фиксация грузов для безопасной перевозки
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-blue-500/20 hover:border-blue-500 transition-colors">
							<CardContent className="p-0">
								<Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Быстрая погрузка
								</h3>
								<p className="text-gray-600 text-sm">
									Откидные борта позволяют загружать груз с любой стороны
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-blue-500/20 hover:border-blue-500 transition-colors">
							<CardContent className="p-0">
								<Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Опытные водители
								</h3>
								<p className="text-gray-600 text-sm">
									Знают особенности перевозки тяжелых и габаритных грузов
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
							Профессиональные услуги бортовых машин по всему Крыму
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
							© 2025 GARANT. Бортовые машины в Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default FlatbedServices;
