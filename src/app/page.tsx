'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Phone,
	Mail,
	MapPin,
	Truck,
	Shield,
	Clock,
	Users,
	CheckCircle,
	Package,
	Building,
	Home,
	Star,
	Menu,
	X,
	MessageCircle,
	ArrowRight,
	Mountain,
	Waves,
	Ship,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SEOHead from '@/components/SEOHead';

const Index = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-white">
			<SEOHead
				title="Грузоперевозки по Крыму"
				description="Надежные грузоперевозки по всему Крыму от компании GARANT. Машины с пирамидой, бортовые машины, манипуляторы. Симферополь, Севастополь, Ялта, Керчь. Звоните: +7 (978) 863-11-97"
				serviceType="Грузоперевозки и транспортные услуги по Крыму"
				url="https://garantgruz.ru"
				priceRange="1500₽-11000₽"
				breadcrumbs={[
					{
						name: "Главная",
						url: "https://garantgruz.ru",
					},
				]}
				offers={[
					{
						name: "Машины с пирамидой",
						price: "1500",
						priceCurrency: "RUB",
						description: "Перевозка окон и стеклопакетов",
						availability: "InStock",
					},
					{
						name: "Бортовые машины",
						price: "1500",
						priceCurrency: "RUB",
						description: "Доставка тяжелых грузов и стройматериалов",
						availability: "InStock",
					},
					{
						name: "Манипуляторы",
						price: "4000",
						priceCurrency: "RUB",
						description: "Подъем грузов на высоту",
						availability: "InStock",
					},
				]}
			/>
			{/* Header */}
			<header className="bg-garant-navy text-white py-3 sm:py-4 px-4 sm:px-6 lg:px-8 2xl:px-12">
				<div className="max-w-7xl 2xl:max-w-8xl mx-auto">
					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2 flex-shrink-0">
							<Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold" />
							<div>
								<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-garant-gold">
									GARANT
								</h2>
								<p className="text-xs sm:text-sm text-gray-300 hidden sm:block">
									грузовые перевозки
								</p>
							</div>
						</div>

						<nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 2xl:space-x-8">
							<a
								href="#services"
								className="hover:text-garant-gold transition-colors text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap py-2 px-1 lg:px-2"
							>
								Услуги
							</a>
							<a
								href="#routes"
								className="hover:text-garant-gold transition-colors text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap py-2 px-1 lg:px-2"
							>
								Направления
							</a>
							<a
								href="#about"
								className="hover:text-garant-gold transition-colors text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap py-2 px-1 lg:px-2"
							>
								О компании
							</a>
							<a
								href="#reviews"
								className="hover:text-garant-gold transition-colors text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap py-2 px-1 lg:px-2"
							>
								Отзывы
							</a>
							<a
								href="#contacts"
								className="hover:text-garant-gold transition-colors text-xs lg:text-sm xl:text-base 2xl:text-lg whitespace-nowrap py-2 px-1 lg:px-2"
							>
								Контакты
							</a>
						</nav>

						<div className="flex items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
							<div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4 text-xs xl:text-sm 2xl:text-base">
								<div className="flex items-center gap-1">
									<Phone className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5" />
									<a
										href="tel:+79788631197"
										className="hover:text-garant-gold transition-colors whitespace-nowrap"
									>
										+7 (978) 863-11-97
									</a>
								</div>
								<div className="hidden xl:flex items-center gap-1">
									<Mail className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5" />
									<a
										href="mailto:ilyas-crimea@mail.ru"
										className="hover:text-garant-gold transition-colors whitespace-nowrap"
									>
										ilyas-crimea@mail.ru
									</a>
								</div>
							</div>

							<div className="hidden sm:flex items-center gap-1 lg:gap-2">
								<a
									href="https://wa.me/79788631197"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-400 hover:text-green-300 transition-colors p-1"
									title="WhatsApp"
								>
									<MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6" />
								</a>
								<a
									href="https://t.me/+79788631197"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 transition-colors p-1"
									title="Telegram"
								>
									<svg
										className="h-4 w-4 lg:h-5 lg:w-5 2xl:h-6 2xl:w-6"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 1.28-1.268 1.28l-3.24-2.44-1.56 1.48c-.172.172-.32.32-.656.32l.232-3.316 6.024-5.412c.26-.232-.056-.36-.404-.128l-7.444 4.668-3.2-1.004c-.696-.22-.712-.696.144-1.032L16.8 7.52c.58-.216 1.088.136.9.64z" />
									</svg>
								</a>
							</div>

							<Button
								className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold text-xs sm:text-sm lg:text-base 2xl:text-lg px-2 xs:px-3 sm:px-4 lg:px-5 xl:px-6 py-2 lg:py-3 2xl:px-8 2xl:py-4 flex-shrink-0"
								asChild
							>
								<a href="tel:+79788631197" className="whitespace-nowrap">
									<span className="hidden xs:inline md:hidden">Звонок</span>
									<span className="xs:hidden md:inline lg:hidden">
										Позвонить
									</span>
									<span className="hidden lg:inline">Позвонить сейчас</span>
								</a>
							</Button>

							<Button
								variant="ghost"
								size="sm"
								className="md:hidden text-white p-1 flex-shrink-0"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								{isMenuOpen ? (
									<X className="h-5 w-5" />
								) : (
									<Menu className="h-5 w-5" />
								)}
							</Button>
						</div>
					</div>

					{isMenuOpen && (
						<div className="md:hidden mt-4 pb-4 border-t border-garant-navy-light">
							<nav className="flex flex-col space-y-3 mt-4">
								<a
									href="#services"
									className="hover:text-garant-gold transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									Услуги
								</a>
								<a
									href="#routes"
									className="hover:text-garant-gold transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									Направления
								</a>
								<a
									href="#about"
									className="hover:text-garant-gold transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									О компании
								</a>
								<a
									href="#reviews"
									className="hover:text-garant-gold transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									Отзывы
								</a>
								<a
									href="#contacts"
									className="hover:text-garant-gold transition-colors py-2"
									onClick={() => setIsMenuOpen(false)}
								>
									Контакты
								</a>
								<div className="lg:hidden pt-3 border-t border-garant-navy-light">
									<div className="flex flex-col space-y-2 text-sm">
										<a
											href="tel:+79788631197"
											className="hover:text-garant-gold transition-colors flex items-center gap-2"
										>
											<Phone className="h-4 w-4" />
											+7 (978) 863-11-97
										</a>
										<a
											href="mailto:ilyas-crimea@mail.ru"
											className="hover:text-garant-gold transition-colors flex items-center gap-2"
										>
											<Mail className="h-4 w-4" />
											ilyas-crimea@mail.ru
										</a>
									</div>
								</div>
							</nav>
						</div>
					)}
				</div>
			</header>

			{/* Hero Section with SEO H1 */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-garant-navy via-garant-navy-light to-garant-navy">
					<div className="absolute inset-0 opacity-5">
						<div
							className="w-full h-full"
							style={{
								backgroundImage: `
                  linear-gradient(rgba(201, 169, 107, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(201, 169, 107, 0.1) 1px, transparent 1px)
                `,
								backgroundSize: "30px 30px sm:50px 50px",
							}}
						></div>
					</div>
				</div>

				<div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
					<div className="mb-6 sm:mb-8">
						<div className="inline-flex items-center gap-2 sm:gap-3 bg-garant-gold/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6">
							<Truck className="h-4 w-4 sm:h-6 sm:w-6 text-garant-gold" />
							<span className="text-garant-gold font-semibold text-sm sm:text-base">
								№1 в Крыму
							</span>
						</div>
					</div>

					<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 xs:px-0">
						Грузоперевозки по Крыму{" "}
						<span className="text-garant-gold relative">
							недорого и быстро
							<div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-garant-gold/50 rounded-full"></div>
						</span>
					</h1>

					<p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 xs:px-4">
						Профессиональные грузоперевозки: машины с пирамидой, бортовые
						машины и манипуляторы по всему Крыму. Автопарк из 15 машин.
					</p>

					{/* Stats */}
					<div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
						<div className="text-center min-w-[80px]">
							<div className="text-xl sm:text-2xl lg:text-3xl font-bold text-garant-gold">
								15
							</div>
							<div className="text-xs sm:text-sm text-gray-300">
								машин в автопарке
							</div>
						</div>

						<div className="text-center min-w-[80px]">
							<div className="text-xl sm:text-2xl lg:text-3xl font-bold text-garant-gold">
								10
							</div>
							<div className="text-xs sm:text-sm text-gray-300">
								лет на рынке
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 xs:px-4">
						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold text-sm xs:text-base sm:text-lg px-4 xs:px-6 py-4 sm:px-8 sm:py-6 shadow-2xl shadow-garant-gold/20 w-full sm:w-auto min-h-[48px]"
							asChild
						>
							<a
								href="tel:+79788631197"
								className="flex items-center justify-center gap-2"
							>
								<Phone className="h-4 w-4 sm:h-5 sm:w-5" />
								<span className="text-xs xs:text-sm sm:text-base">
									<span className="hidden xs:inline">
										Заказать перевозку: +7 (978) 863-11-97
									</span>
									<span className="xs:hidden">+7 (978) 863-11-97</span>
								</span>
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-transparent border-2 border-garant-gold text-garant-gold hover:bg-garant-gold hover:text-garant-navy font-semibold text-sm xs:text-base sm:text-lg px-4 xs:px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto min-h-[48px]"
							asChild
						>
							<a
								href="#routes"
								className="flex items-center justify-center gap-2"
							>
								Выбрать направление
							</a>
						</Button>
					</div>

					<div className="mt-6 sm:mt-8 inline-block bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow ring-1 ring-black/10 hover:shadow-md transition duration-300 text-xs xs:text-sm sm:text-base mx-2 xs:mx-0">
						<span className="hidden xs:inline">
							🎁 Скидка 10% для новых клиентов при заказе через сайт
						</span>
						<span className="xs:hidden">-10% онлайн-заказ 🎁</span>
					</div>


				</div>
			</section>

			{/* Routes Section */}
			<section id="routes" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
							Направления грузоперевозок по Крыму
						</h2>
						<p className="text-lg sm:text-xl text-gray-600">
							Выберите нужный маршрут для грузоперевозки любым типом
							транспорта
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						<Link href="/simferopol">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Building className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												По Симферополю
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">
										По городу • 30-60 мин
									</p>
									<p className="text-sm text-gray-500">Все районы города</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 1 500₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-sevastopol">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<MapPin className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Севастополь
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">79 км • 1-1.5 часа</p>
									<p className="text-sm text-gray-500">Героический город</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 6 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-yalta">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Ялта
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">90 км • 1.5-2 часа</p>
									<p className="text-sm text-gray-500">Курортная жемчужина</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 7 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-bakhchisaray">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Mountain className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Бахчисарай
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">31 км • 35-45 мин</p>
									<p className="text-sm text-gray-500">Древняя столица</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 3 500 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-alushta">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Алушта
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">54 км • 50-70 мин</p>
									<p className="text-sm text-gray-500">Курортная зона</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 5 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-kerch">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Ship className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Керчь
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">210 км • 2.5-3 часа</p>
									<p className="text-sm text-gray-500">Портовый город</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 11 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-feodosia">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Феодосия
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">124 км • 2-2.5 часа</p>
									<p className="text-sm text-gray-500">Древний порт</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 8 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-dzhankoy">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<MapPin className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Джанкой
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">94 км • 1-1.5 часа</p>
									<p className="text-sm text-gray-500">Транспортный узел</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 6 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-sudak">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Судак
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">109 км • 2-2.5 часа</p>
									<p className="text-sm text-gray-500">Курортный город</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 7 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-evpatoria">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Евпатория
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">75 км • 1-1.5 часа</p>
									<p className="text-sm text-gray-500">Древний курорт</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 5 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-saki">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Саки
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">45 км • 40-55 мин</p>
									<p className="text-sm text-gray-500">Лечебный курорт</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 4 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-chernomorskoye">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Черноморское
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">142 км • 1.5-2 часа</p>
									<p className="text-sm text-gray-500">Курортный поселок</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 9 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-krasnoperekopsk">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Building className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Красноперекопск
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">124 км • 1.5-2 часа</p>
									<p className="text-sm text-gray-500">Промышленный центр</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 9 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Link href="/simferopol-genicheskhesk">
							<Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-garant-gold cursor-pointer group h-full">
								<CardContent className="p-6">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center gap-3">
											<Waves className="h-6 w-6 text-garant-gold" />
											<span className="font-semibold text-garant-navy">
												Геническ
											</span>
										</div>
										<ArrowRight className="h-5 w-5 text-garant-gold group-hover:translate-x-1 transition-transform" />
									</div>
									<p className="text-gray-600 mb-3">172 км • 2.5-3 часа</p>
									<p className="text-sm text-gray-500">Азовское море</p>
									<div className="mt-4 text-garant-gold font-semibold">
										от 11 000 ₽
									</div>
								</CardContent>
							</Card>
						</Link>

						<Card className="border-2 border-dashed border-garant-gold/50 cursor-pointer group h-full flex items-center justify-center">
							<CardContent className="p-6 text-center">
								<Phone className="h-8 w-8 text-garant-gold mx-auto mb-3" />
								<p className="text-garant-navy font-semibold mb-2">
									Другие направления
								</p>
								<p className="text-sm text-gray-500 mb-3">
									Белогорск, Краснодар и др.
								</p>
								<Button variant="outline" size="sm" asChild>
									<a href="tel:+79788631197">Позвонить</a>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Form */}
			<ContactForm />

			{/* Services Section */}
			<section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12 sm:mb-16">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
							Три типа транспорта для любых задач
						</h2>
						<p className="text-lg sm:text-xl text-gray-600">
							Машины с пирамидой, бортовые машины и манипуляторы
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
						{/* Машины с пирамидой */}
						<Card className="p-4 sm:p-6 border-2 border-garant-gold bg-garant-gold/5 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow">
								<div className="text-center mb-4">
									<div className="text-3xl sm:text-4xl mb-3">🚛</div>
									<h3 className="text-lg sm:text-xl font-bold text-garant-navy mb-2">
										Машины с пирамидой
									</h3>
									<p className="text-garant-gold font-semibold text-sm">
										Объемные грузы • 2-3.5 тонн
									</p>
								</div>

								<div className="space-y-2 text-xs sm:text-sm flex-grow">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-garant-gold flex-shrink-0" />
										<span>Мебель и бытовая техника</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-garant-gold flex-shrink-0" />
										<span>Стройматериалы</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-garant-gold flex-shrink-0" />
										<span>Доставка окон и стеклопакетов</span>
									</div>
								</div>

								<div className="mt-4 text-center">
									<div className="text-xl font-bold text-garant-gold mb-2">от 1 500₽</div>
									<Button
										size="sm"
										className="bg-garant-navy hover:bg-garant-navy-light text-white"
										asChild
									>
										<Link href="/pyramid">Подробнее</Link>
									</Button>
								</div>

							</CardContent>
						</Card>

						{/* Бортовые мащины */}
						<Card className="p-4 sm:p-6 border-2 border-blue-500 bg-blue-50 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow">
								<div className="text-center mb-4">
									<div className="text-3xl sm:text-4xl mb-3">📦</div>
									<h3 className="text-lg sm:text-xl font-bold text-garant-navy mb-2">
										Бортовые машины
									</h3>
									<p className="text-blue-600 font-semibold text-sm">
										Тяжелые грузы • до 5 тонн
									</p>
								</div>

								<div className="space-y-2 text-xs sm:text-sm flex-grow">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
										<span>Стройматериалы</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
										<span>Металлические конструкции</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-blue-600 flex-shrink-0" />
										<span>Паллетные грузы</span>
									</div>
								</div>

								<div className="mt-4 text-center">
									<div className="text-xl font-bold text-blue-600 mb-2">от 1 500₽</div>
									<Button
										size="sm"
										className="bg-blue-600 hover:bg-blue-700 text-white"
										asChild
									>
										<Link href="/flatbed">Подробнее</Link>
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Манипуляторы */}
						<Card className="p-4 sm:p-6 border-4 border-green-500 bg-green-50 flex flex-col">
							<CardContent className="p-0 flex flex-col flex-grow">
								<div className="text-center mb-4">
									<div className="text-3xl sm:text-4xl mb-3">🏗️</div>
									<h3 className="text-lg sm:text-xl font-bold text-garant-navy mb-2">
										Манипуляторы
									</h3>
									<p className="text-green-600 font-semibold text-sm">
										Подъем до 5 тонн • Любая высота
									</p>
									<div className="inline-block bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold mt-1">
										⭐ ТОП услуга
									</div>
								</div>

								<div className="space-y-2 text-xs sm:text-sm flex-grow">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
										<span>Подъем на крышу</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
										<span>Стройматериалы</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
										<span>Погрузка паллет</span>
									</div>
								</div>

								<div className="mt-4 text-center">
									<div className="text-xl font-bold text-green-600 mb-2">от 4 000₽</div>
									<Button
										size="sm"
										className="bg-green-600 hover:bg-green-700 text-white"
										asChild
									>
										<Link href="/manipulator">Подробнее</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* About Section - Brief */}
			<section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
							GARANT - лидер грузоперевозок в Крыму
						</h2>
						<p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
							10 лет профессиональных грузоперевозок. 15 единиц техники для
							любых задач.
						</p>

						<div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
							<div className="text-center">
								<div className="text-2xl font-bold text-garant-gold">2014</div>
								<div className="text-sm text-gray-600">год основания</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-garant-gold">15</div>
								<div className="text-sm text-gray-600">единиц техники</div>
							</div>
							<div className="text-center">
								<div className="text-2xl font-bold text-garant-gold">5000+</div>
								<div className="text-sm text-gray-600">клиентов</div>
							</div>
						</div>

						<Button
							size="lg"
							className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold"
							asChild
						>
							<Link href="/about" className="flex items-center gap-2">
								Узнать больше о компании
								<ArrowRight className="h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
						Отзывы о грузоперевозках GARANT
					</h2>
					<p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
						Что говорят клиенты о наших услугах грузоперевозок
					</p>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						<Card className="p-4 sm:p-6">
							<CardContent className="p-0">
								<div className="flex items-center justify-center gap-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-4 text-sm sm:text-base">
									"Заказывали Газель для перевозки стеклопакетов в Ялту. Все
									довезли целым, водитель очень аккуратный. Цена честная,
									рекомендую!"
								</p>
								<p className="text-garant-navy font-semibold text-sm sm:text-base">
									— Андрей К.
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 sm:p-6">
							<CardContent className="p-0">
								<div className="flex items-center justify-center gap-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-4 text-sm sm:text-base">
									"Постоянно пользуемся услугами для доставки стройматериалов.
									Быстро, надежно, всегда в срок. Автопарк хороший."
								</p>
								<p className="text-garant-navy font-semibold text-sm sm:text-base">
									— ООО "Стройтех"
								</p>
							</CardContent>
						</Card>

						<Card className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
							<CardContent className="p-0">
								<div className="flex items-center justify-center gap-1 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className="w-4 h-4 sm:w-5 sm:h-5 fill-garant-gold text-garant-gold"
										/>
									))}
								</div>
								<p className="text-gray-600 mb-4 text-sm sm:text-base">
									"Заказывали манипулятор из Симферополя в Севастополь.
									Манипулятор подали быстро. Скидка 10% приятно удивила!"
								</p>
								<p className="text-garant-navy font-semibold text-sm sm:text-base">
									— Мария С.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer
				id="contacts"
				className="bg-garant-navy text-white py-12 sm:py-16"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						<div className="sm:col-span-2 lg:col-span-1">
							<div className="flex items-center gap-2 mb-4">
								<Truck className="h-6 w-6 sm:h-8 sm:w-8 text-garant-gold" />
								<div>
									<h4 className="text-xl sm:text-2xl font-bold text-garant-gold">
										GARANT
									</h4>
									<p className="text-xs sm:text-sm text-gray-300">
										грузоперевозки по Крыму
									</p>
								</div>
							</div>
							<p className="text-gray-300 text-sm sm:text-base">
								Профессиональные грузоперевозки по всему Крыму. Автопарк из 15
								машин: пирамиды, бортовые, манипуляторы.
							</p>
						</div>

						<div>
							<h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
								Популярные направления
							</h5>
							<ul className="space-y-2">
								<li>
									<Link
										href="/simferopol-sevastopol"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
									>
										Симферополь - Севастополь
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-yalta"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
									>
										Симферополь - Ялта
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol-kerch"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
									>
										Симферополь - Керчь
									</Link>
								</li>
								<li>
									<Link
										href="/simferopol"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
									>
										По Симферополю
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
								Контакты
							</h5>
							<div className="space-y-3">
								<div className="flex items-center gap-2">
									<Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
									<a
										href="tel:+79788631197"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base"
									>
										+7 (978) 863-11-97
									</a>
								</div>
								<div className="flex items-center gap-2">
									<Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
									<a
										href="mailto:ilyas-crimea@mail.ru"
										className="text-gray-300 hover:text-garant-gold transition-colors text-sm sm:text-base break-all"
									>
										ilyas-crimea@mail.ru
									</a>
								</div>
								<div className="flex items-start gap-2">
									<MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-1 flex-shrink-0" />
									<p className="text-gray-300 text-sm sm:text-base">
										Республика Крым
										<br />
										г. Симферополь
									</p>
								</div>
								<div className="flex items-center gap-3 pt-2">
									<a
										href="https://wa.me/79788631197"
										target="_blank"
										rel="noopener noreferrer"
										className="text-green-400 hover:text-green-300 transition-colors"
										title="WhatsApp"
									>
										<MessageCircle className="h-5 w-5" />
									</a>
									<a
										href="https://t.me/+79788631197"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-300 transition-colors"
										title="Telegram"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 1.28-1.268 1.28l-3.24-2.44-1.56 1.48c-.172.172-.32.32-.656.32l.232-3.316 6.024-5.412c.26-.232-.056-.36-.404-.128l-7.444 4.668-3.2-1.004c-.696-.22-.712-.696.144-1.032L16.8 7.52c.58-.216 1.088.136.9.64z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div>
							<h5 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-garant-gold">
								Заказать транспорт
							</h5>
							<Button
								className="bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold w-full min-h-[44px] text-sm sm:text-base"
								asChild
							>
								<a href="tel:+79788631197">Позвонить прямо сейчас</a>
							</Button>
						</div>
					</div>

					<div className="border-t border-garant-navy-light mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
						<p className="text-gray-300 text-sm sm:text-base">
							© 2025 GARANT. Грузоперевозки по Крыму. Все права защищены.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
