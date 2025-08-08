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
	Home,
	Building,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";

export const metadata: Metadata = {
	title: 'Манипуляторы в Крыму | Услуги от 4000₽ | GARANT',
	description: 'Услуги манипуляторов по Крыму от 4000₽. Подъем грузов до 5 тонн на высоту до 15 метров. Перевозка стройматериалов, подъем на крышу, погрузка паллет. ТОП услуга! Безопасная и надежная работа.',
	keywords: [
		'манипулятор Крым',
		'услуги манипулятора',
		'подъем грузов Симферополь',
		'манипуляторы',
		'грузоперевозки Крым'
	],
	openGraph: {
		title: 'Манипуляторы в Крыму | GARANT',
		description: 'Услуги манипуляторов по Крыму от 4000₽. Подъем грузов до 5 тонн на высоту. Перевозка стройматериалов, подъем на крышу, погрузка паллет. ТОП услуга!',
		url: 'https://garantgruz.ru/manipulator',
	},
	alternates: {
		canonical: 'https://garantgruz.ru/manipulator',
	},
}


const ManipulatorServices = () => {
	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Манипуляторы"
				description="Услуги манипуляторов по Крыму от 4000₽. Подъем грузов до 5 тонн на высоту. Перевозка стройматериалов, подъем на крышу, погрузка паллет. ТОП услуга!"
				serviceType="Услуги манипуляторов и подъем грузов"
				url="https://garantgruz.ru/manipulator"
				priceRange="4000₽-25000₽"
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
						name: "Манипуляторы",
						url: "https://garantgruz.ru/manipulator",
					},
				]}
				offers={[
					{
						name: "Перевозка стройматериалов",
						price: "4000",
						priceCurrency: "RUB",
						description: "Перевозка стройматериалов и подъем на высоту",
						availability: "InStock",
					},
					{
						name: "Подъем на крышу",
						price: "4000",
						priceCurrency: "RUB",
						description: "Подъем материалов и оборудования на крышу",
						availability: "InStock",
					},
					{
						name: "Погрузка паллет",
						price: "4000",
						priceCurrency: "RUB",
						description: "Погрузка тяжелых паллет и контейнеров",
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
			<section className="bg-gray-50 py-16 sm:py-20 border-t-4 border-green-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="mb-6">
						<div className="text-6xl sm:text-7xl mb-4">🏗️</div>
						<div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
							⭐ ТОП услуга
						</div>
					</div>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-garant-navy">
						Услуги манипуляторов в Крыму
					</h1>

					<p className="text-lg sm:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
						Профессиональный подъем и перемещение тяжелых грузов
						манипуляторами. Незаменимы для строительства, установки
						оборудования и подъема на высоту.
					</p>

					<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">до 5т</div>
							<div className="text-sm text-gray-300">грузоподъемность</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">до 15м</div>
							<div className="text-sm text-gray-500">высота подъема</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">от 4000</div>
							<div className="text-sm text-gray-500">стоимость</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							size="lg"
							className="bg-green-600 hover:bg-green-700 text-white font-semibold"
							asChild
						>
							<a href="tel:+79788631197">
								<Phone className="h-5 w-5 mr-2" />
								Заказать манипулятор
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
							Что такое манипулятор и зачем он нужен?
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Манипулятор - это автомобиль с гидравлическим краном,
							способный поднимать тяжелые грузы на значительную высоту
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 mb-16">
						<div>
							<h3 className="text-xl font-bold text-garant-navy mb-6">
								Преимущества манипуляторов
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Высокая грузоподъемность
										</h4>
										<p className="text-gray-600">
											Поднимают грузы весом до 5 тонн
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Большая высота подъема
										</h4>
										<p className="text-gray-600">
											Подъем на высоту до 15 метров
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Точное позиционирование
										</h4>
										<p className="text-gray-600">
											Аккуратная установка груза в нужное место
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
									<div>
										<h4 className="font-semibold text-garant-navy mb-1">
											Экономия времени и сил
										</h4>
										<p className="text-gray-600">
											Заменяет работу 10+ грузчиков
										</p>
									</div>
								</div>
							</div>
						</div>

						<Card className="p-6 border-4 border-green-500">
							<CardContent className="p-0">
								<h3 className="text-xl font-bold text-garant-navy mb-6">
									Популярные задачи для манипулятора
								</h3>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Building className="h-5 w-5 text-green-600" />
										<span>Подъем стройматериалов на крышу</span>
									</div>
									<div className="flex items-center gap-3">
										<Wrench className="h-5 w-5 text-green-600" />
										<span>Установка кондиционеров на фасад</span>
									</div>
									<div className="flex items-center gap-3">
										<Home className="h-5 w-5 text-green-600" />
										<span>Подъем мебели на этаж через окно</span>
									</div>
									<div className="flex items-center gap-3">
										<Package className="h-5 w-5 text-green-600" />
										<span>Погрузка/разгрузка паллет</span>
									</div>
									<div className="flex items-center gap-3">
										<Shield className="h-5 w-5 text-green-600" />
										<span>Монтаж металлоконструкций</span>
									</div>
									<div className="flex items-center gap-3">
										<Star className="h-5 w-5 text-green-600" />
										<span>Установка рекламных конструкций</span>
									</div>
									<div className="flex items-center gap-3">
										<Truck className="h-5 w-5 text-green-600" />
										<span>Перемещение тяжелого оборудования</span>
									</div>
									<div className="flex items-center gap-3">
										<Weight className="h-5 w-5 text-green-600" />
										<span>Разгрузка строительных блоков</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Pricing Table */}
					<div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
						<h3 className="text-2xl font-bold text-garant-navy mb-6 text-center">
							Стоимость услуг манипуляторов по Крыму
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
										<td className="text-right py-3 text-green-600 font-semibold">
											от 4000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Бахчисарай</td>
										<td className="text-center py-3">31 км</td>
										<td className="text-center py-3">35-45 мин</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 7000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Алушта</td>
										<td className="text-center py-3">54 км</td>
										<td className="text-center py-3">50-70 мин</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 10000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Евпатория</td>
										<td className="text-center py-3">75 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 10000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Севастополь</td>
										<td className="text-center py-3">79 км</td>
										<td className="text-center py-3">1-1.5 часа</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 12000₽
										</td>
									</tr>
									<tr className="border-b border-gray-100">
										<td className="py-3">Симферополь - Ялта</td>
										<td className="text-center py-3">90 км</td>
										<td className="text-center py-3">1.5-2 часа</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 15000₽
										</td>
									</tr>
									<tr>
										<td className="py-3">Симферополь - Керчь</td>
										<td className="text-center py-3">210 км</td>
										<td className="text-center py-3">2.5-3 часа</td>
										<td className="text-right py-3 text-green-600 font-semibold">
											от 25000₽
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

			{/* Special Features */}
			<section className="py-16 bg-green-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Почему манипулятор экономит ваши деньги?
						</h2>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<Card className="p-6 text-center bg-white border-2 border-green-500">
							<CardContent className="p-0">
								<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Users className="h-8 w-8 text-green-600" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Вместо 10 грузчиков
								</h3>
								<p className="text-gray-600 text-sm">
									Один манипулятор заменяет целую бригаду грузчиков
								</p>
								<div className="mt-4 text-green-600 font-bold text-xl">
									Экономия: 3000₽
								</div>
							</CardContent>
						</Card>

						<Card className="p-6 text-center bg-white border-2 border-green-500">
							<CardContent className="p-0">
								<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Clock className="h-8 w-8 text-green-600" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Быстрее в 5 раз
								</h3>
								<p className="text-gray-600 text-sm">
									Подъем груза за 10 минут вместо часа ручной работы
								</p>
								<div className="mt-4 text-green-600 font-bold text-xl">
									Экономия времени: 90%
								</div>
							</CardContent>
						</Card>

						<Card className="p-6 text-center bg-white border-2 border-green-500">
							<CardContent className="p-0">
								<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
									<Shield className="h-8 w-8 text-green-600" />
								</div>
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Безопасность
								</h3>
								<p className="text-gray-600 text-sm">
									Исключает риск травм при подъеме тяжелых грузов
								</p>
								<div className="mt-4 text-green-600 font-bold text-xl">
									Риск травм: 0%
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
							Почему выбирают наши манипуляторы
						</h2>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="p-6 text-center border-2 border-green-500/20 hover:border-green-500 transition-colors">
							<CardContent className="p-0">
								<Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Современное оборудование
								</h3>
								<p className="text-gray-600 text-sm">
									Новые краны с точным управлением и высокой надежностью
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-green-500/20 hover:border-green-500 transition-colors">
							<CardContent className="p-0">
								<Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									Опытные операторы
								</h3>
								<p className="text-gray-600 text-sm">
									Сертифицированные крановщики с опытом работы от 5 лет
								</p>
							</CardContent>
						</Card>

						<Card className="p-6 text-center border-2 border-green-500/20 hover:border-green-500 transition-colors">
							<CardContent className="p-0">
								<Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
								<h3 className="text-lg font-semibold text-garant-navy mb-2">
									24/7
								</h3>
								<p className="text-gray-600 text-sm">
									Оформляйте заявки в любое время дня и ночи с помощью формы на нашем сайте!
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
							Профессиональные услуги манипуляторов по всему Крыму
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
							© 2025 GARANT. Манипуляторы в Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default ManipulatorServices;
