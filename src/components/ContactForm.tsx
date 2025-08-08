'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Send, Calculator, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		from: "Симферополь",
		to: "",
		cargo: "",
		weight: "",
		dimensions: "",
		transportType: "", // "pyramid", "flatbed", "manipulator"
		loadingTime: "",
		unloadingTime: "",
		message: "",
	});

	const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

	// Базовые тарифы по направлениям для разных типов транспорта
	const basePrices = {
		"По Симферополю": {
			pyramid: 1500,
			flatbed: 1500,
			manipulator: 4000,
			perKm: 0,
			time: "30-60 мин",
		},
		Севастополь: {
			pyramid: 6000,
			flatbed: 6000,
			manipulator: 12000,
			perKm: 79,
			time: "1-1.5 часа",
		},
		Ялта: {
			pyramid: 7000,
			flatbed: 7000,
			manipulator: 15000,
			perKm: 90,
			time: "1.5-2 часа",
		},
		Бахчисарай: {
			pyramid: 3500,
			flatbed: 3500,
			manipulator: 7000,
			perKm: 31,
			time: "35-45 мин",
		},
		Алушта: {
			pyramid: 5000,
			flatbed: 5000,
			manipulator: 10000,
			perKm: 54,
			time: "50-70 мин",
		},
		Керчь: {
			pyramid: 11000,
			flatbed: 11000,
			manipulator: 25000,
			perKm: 210,
			time: "2.5-3 часа",
		},
		Феодосия: {
			pyramid: 8000,
			flatbed: 8000,
			manipulator: 7000,
			perKm: 124,
			time: "2-2.5 часа",
		},
		Джанкой: {
			pyramid: 6000,
			flatbed: 6000,
			manipulator: 12000,
			perKm: 94,
			time: "1-1.5 часа",
		},
		Судак: {
			pyramid: 7000,
			flatbed: 7000,
			manipulator: 15000,
			perKm: 109,
			time: "2-2.5 часа",
		},
		Евпатория: {
			pyramid: 5000,
			flatbed: 5000,
			manipulator: 10000,
			perKm: 75,
			time: "1-1.5 часа",
		},
		Саки: {
			pyramid: 4000,
			flatbed: 4000,
			manipulator: 8000,
			perKm: 45,
			time: "40-55 мин",
		},
		Черноморское: {
			pyramid: 9000,
			flatbed: 9000,
			manipulator: 18000,
			perKm: 142,
			time: "1.5-2 часа",
		},
		Красноперекопск: {
			pyramid: 9000,
			flatbed: 9000,
			manipulator: 18000,
			perKm: 124,
			time: "1.5-2 часа",
		},
		Геническ: {
			pyramid: 11000,
			flatbed: 11000,
			manipulator: 25000,
			perKm: 172,
			time: "2.5-3 часа",
		},
	};

	// Тарифы за время загрузки/разгрузки свыше 30 минут
	const timePricing = {
		pyramid: 600,    // ₽/час для машин с пирамидой
		flatbed: 1000,   // ₽/час для бортовых машин
		manipulator: 2000 // ₽/час для манипуляторов
	};

	const calculateTimeCharge = (timeRange: string, transportType: string) => {
		if (!timeRange || timeRange === "до 30 мин") return 0;

		const hourlyRate = timePricing[transportType as keyof typeof timePricing] || 0;

		switch (timeRange) {
			case "30-60 мин":
				return hourlyRate; // 1 час доплаты
			case "1-2 часа":
				return hourlyRate * 2; // 2 часа доплаты
			case "более 2 часов":
				return hourlyRate * 3; // 3 часа доплаты (примерно)
			default:
				return 0;
		}
	};

	const calculatePrice = () => {
		if (!formData.transportType || !formData.weight || !formData.to) return;

		let price = 0;
		const weight = parseFloat(formData.weight);
		const destination = basePrices[formData.to as keyof typeof basePrices];

		if (destination) {
			// Базовая цена в зависимости от типа транспорта
			if (formData.transportType === "pyramid") {
				price = destination.pyramid;
			} else if (formData.transportType === "flatbed") {
				price = destination.flatbed;
			} else if (formData.transportType === "manipulator") {
				price = destination.manipulator;
			}

			// Доплата за время погрузки
			const loadingCharge = calculateTimeCharge(formData.loadingTime, formData.transportType);
			price += loadingCharge;

			// Доплата за время разгрузки
			const unloadingCharge = calculateTimeCharge(formData.unloadingTime, formData.transportType);
			price += unloadingCharge;
		}

		// Скидка 10%
		price = price * 0.9;

		setCalculatedPrice(Math.round(price));
	};

	useEffect(() => {
		calculatePrice();
	}, [formData.transportType, formData.to, formData.weight, formData.loadingTime, formData.unloadingTime]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Создаем сообщение для Telegram
		const getTransportTypeName = (type: string) => {
			switch (type) {
				case "pyramid":
					return "МАШИНА С ПИРАМИДОЙ";
				case "flatbed":
					return "БОРТОВАЯ МАШИНА";
				case "manipulator":
					return "МАНИПУЛЯТОР";
				default:
					return "не выбран";
			}
		};

		const telegramMessage = `
🚛 НОВАЯ ЗАЯВКА НА ГРУЗОПЕРЕВОЗКУ

👤 Клиент: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}

🚛 Тип транспорта: ${getTransportTypeName(formData.transportType)}
📍 Маршрут: ${formData.from} → ${formData.to || "не указан"}
📦 Груз: ${formData.cargo}
⚖️ Вес: ${formData.weight} кг
📏 Габариты: ${formData.dimensions || "не указаны"}
⏰ Время загрузки: ${formData.loadingTime || "не указано"}
⏱️ Время разгрузки: ${formData.unloadingTime || "не указано"}

💰 Расчетная стоимость: ${calculatedPrice ? `${calculatedPrice} ₽` : "не рассчитана"}

💬 Комментарий: ${formData.message || "не указан"}

#заявка #грузоперевозка #GARANT
    `.trim();

		// Отправляем в Telegram (замените на ваш Telegram Bot API)
		const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
		const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;



		// Для демонстрации показываем alert и открываем Telegram Web
		alert("Заявка отправлена! Мы свяжемся с вами в течение 10 минут.");

		// Открываем Telegram с готовым сообщением
		const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(telegramMessage)}`;
		// window.open(telegramUrl, "_blank");

		// В реальном проекте здесь был бы запрос к API:
		// fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		chat_id: telegramChatId,
		// 		text: telegramMessage,
		// 		parse_mode: 'HTML'
		// 	})
		// });
		await fetch("/api/sendMessage", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: telegramMessage }),
		});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;
		setFormData({
			...formData,
			[name]:
				type === "checkbox"
					? (e.target as HTMLInputElement).checked
					: value || "",
		});
	};

	const handleSelectChange = (field: string, value: string) => {
		setFormData({
			...formData,
			[field]: value || "",
		});
	};

	return (
		<section className="py-12 sm:py-16 lg:py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8 sm:mb-12">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-garant-navy mb-4">
						Заказать грузоперевозку с расчетом стоимости
					</h2>
					<p className="text-lg text-gray-600">
						Рассчитайте стоимость грузоперевозки онлайн и оставьте заявку
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Contact Info */}
					<div className="space-y-6">
						<Card className="border-garant-gold">
							<CardHeader>
								<CardTitle className="text-garant-navy">
									Контакты для экстренной связи
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center gap-3">
									<Phone className="h-5 w-5 text-garant-gold" />
									<div>
										<p className="font-semibold text-garant-navy">
											Диспетчер
										</p>
										<a
											href="tel:+79788631197"
											className="text-gray-600 hover:text-garant-gold transition-colors"
										>
											+7 (978) 863-11-97
										</a>
									</div>
								</div>

								<div className="flex items-center gap-3">
									<Mail className="h-5 w-5 text-garant-gold" />
									<div>
										<p className="font-semibold text-garant-navy">
											Email для заявок
										</p>
										<a
											href="mailto:ilyas-crimea@mail.ru"
											className="text-gray-600 hover:text-garant-gold transition-colors"
										>
											ilyas-crimea@mail.ru
										</a>
									</div>
								</div>
							</CardContent>
						</Card>

						<div className="bg-garant-navy text-white p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4 text-garant-gold">
								Наши возможности
							</h3>
							<ul className="space-y-2 text-sm">
								<li>🚛 Машины с пирамидой (до 5 тонн)</li>
								<li>📦 Бортовые машины (до 5 тонн)</li>
								<li>🏗️ Манипуляторы (до 5 тонн)</li>
								<li>✓ Опыт грузоперевозок более 10 лет</li>
								<li>✓ Страхование всех грузов</li>
								<li>✓ Скидка 10% при заказе онлайн</li>
								<li>⚡ Быстрая подача транспорта</li>
							</ul>
						</div>

						<Card className="border-garant-gold bg-orange-50">
							<CardHeader>
								<CardTitle className="text-garant-navy flex items-center gap-2">
									<Clock className="h-5 w-5 text-garant-gold" />
									Тарификация времени загрузки/разгрузки
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-3">
									<div className="border-l-4 border-garant-gold pl-3">
										<p className="font-semibold text-garant-navy">
											🚛 Машины с пирамидой:
										</p>
										<p className="text-sm text-gray-600">
											Первые 30 мин -{" "}
											<span className="font-bold text-green-600">
												БЕСПЛАТНО
											</span>
										</p>
										<p className="text-sm text-gray-600">
											Далее: <span className="font-bold">600-1000₽/час</span>
										</p>
									</div>

									<div className="border-l-4 border-blue-500 pl-3">
										<p className="font-semibold text-garant-navy">
											📦 Бортовые машины:
										</p>
										<p className="text-sm text-gray-600">
											Первые 30 мин -{" "}
											<span className="font-bold text-green-600">
												БЕСПЛАТНО
											</span>
										</p>
										<p className="text-sm text-gray-600">
											Далее: <span className="font-bold">600-1000₽/час</span>
										</p>
									</div>

									<div className="border-l-4 border-green-500 pl-3">
										<p className="font-semibold text-garant-navy">
											🏗️ Манипуляторы:
										</p>
										<p className="text-sm text-gray-600">
											Первые 30 мин -{" "}
											<span className="font-bold text-green-600">
												БЕСПЛАТНО
											</span>
										</p>
										<p className="text-sm text-gray-600">
											Далее: <span className="font-bold">2500₽/час</span>
										</p>
									</div>
								</div>

								<div className="bg-amber-100 p-3 rounded-lg">
									<p className="text-xs text-amber-800 font-medium">
										⏰ Если загрузка/разгрузка занимает больше 30 минут, доплата
										взимается за каждый полный час
									</p>
								</div>
							</CardContent>
						</Card>


					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card>
							<CardContent className="p-6">
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="name">Ваше имя *</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												placeholder="Введите ваше имя"
											/>
										</div>

										<div>
											<Label htmlFor="phone">Телефон *</Label>
											<Input
												id="phone"
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleChange}
												required
												placeholder="+7 (___) ___-__-__"
											/>
										</div>
									</div>

									<div>
										<Label htmlFor="email">Email для подтверждения</Label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleChange}
											placeholder="your@email.com"
										/>
									</div>

									<div>
										<Label htmlFor="transportType">Тип транспорта *</Label>
										<Select
											value={formData.transportType}
											onValueChange={(value) =>
												handleSelectChange("transportType", value)
											}
											required
										>
											<SelectTrigger id="transportType">
												<SelectValue placeholder="Выберите тип транспорта" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="pyramid">
													🚛 Машина с пирамидой - для объемных грузов
												</SelectItem>
												<SelectItem value="flatbed">
													📦 Бортовая машина - для тяжелых грузов
												</SelectItem>
												<SelectItem value="manipulator">
													🏗️ Манипулятор - для подъема грузов
												</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="from">Откуда забрать груз</Label>
											<Select
												value={formData.from}
												onValueChange={(value) =>
													handleSelectChange("from", value)
												}
												defaultValue="Симферополь"
											>
												<SelectTrigger id="from">
													<SelectValue placeholder="Выберите город" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Симферополь">
														Симферополь
													</SelectItem>
													<SelectItem value="Севастополь">
														Севастополь
													</SelectItem>
													<SelectItem value="Ялта">Ялта</SelectItem>
													<SelectItem value="Бахчисарай">Бахчисарай</SelectItem>
													<SelectItem value="Алушта">Алушта</SelectItem>
													<SelectItem value="Керчь">Керчь</SelectItem>
													<SelectItem value="Феодосия">Феодосия</SelectItem>
													<SelectItem value="Джанкой">Джанкой</SelectItem>
													<SelectItem value="Судак">Судак</SelectItem>
													<SelectItem value="Евпатория">Евпатория</SelectItem>
													<SelectItem value="Саки">Саки</SelectItem>
													<SelectItem value="Черноморское">Черноморское</SelectItem>
													<SelectItem value="Красноперекопск">Красноперекопск</SelectItem>
													<SelectItem value="Геническ">Геническ</SelectItem>
													<SelectItem value="Другой город">Другой город</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div>
											<Label htmlFor="to">Куда доставить груз *</Label>
											<Select
												value={formData.to}
												onValueChange={(value) =>
													handleSelectChange("to", value)
												}
												required
											>
												<SelectTrigger id="to">
													<SelectValue placeholder="Выберите направление" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="По Симферополю">
														По Симферополю
													</SelectItem>
													<SelectItem value="Севастополь">
														Севастополь (79 км)
													</SelectItem>
													<SelectItem value="Ялта">
														Ялта (90 км)
													</SelectItem>
													<SelectItem value="Бахчисарай">
														Бахчисарай (31 км)
													</SelectItem>
													<SelectItem value="Алушта">
														Алушта (54 км)
													</SelectItem>
													<SelectItem value="Керчь">
														Керчь (210 км)
													</SelectItem>
													<SelectItem value="Феодосия">
														Феодосия (124 км)
													</SelectItem>
													<SelectItem value="Джанкой">
														Джанкой (94 км)
													</SelectItem>
													<SelectItem value="Судак">
														Судак (109 км)
													</SelectItem>
													<SelectItem value="Евпатория">
														Евпатория (75 км)
													</SelectItem>
													<SelectItem value="Саки">
														Саки (45 км)
													</SelectItem>
													<SelectItem value="Черноморское">
														Черноморское (142 км)
													</SelectItem>
													<SelectItem value="Красноперекопск">
														Красноперекопск (124 км)
													</SelectItem>
													<SelectItem value="Геническ">
														Геническ (172 км)
													</SelectItem>
													<SelectItem value="Другой">
														Другой город
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div className="grid sm:grid-cols-3 gap-4">
										<div>
											<Label htmlFor="cargo">Описание груза *</Label>
											<Input
												id="cargo"
												name="cargo"
												value={formData.cargo}
												onChange={handleChange}
												required
												placeholder="Что перевозим?"
											/>
										</div>

										<div>
											<Label htmlFor="weight">Вес груза (кг) *</Label>
											<Input
												id="weight"
												name="weight"
												type="number"
												value={formData.weight}
												onChange={handleChange}
												required
												placeholder="100"
											/>
										</div>

										<div>
											<Label htmlFor="dimensions">Габариты (д×ш×в)</Label>
											<Input
												id="dimensions"
												name="dimensions"
												value={formData.dimensions}
												onChange={handleChange}
												placeholder="2м×1м×1м"
											/>
										</div>
									</div>

									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<Label htmlFor="loadingTime">Время на погрузку</Label>
											<Select
												value={formData.loadingTime}
												onValueChange={(value) =>
													handleSelectChange("loadingTime", value)
												}
											>
												<SelectTrigger id='loadingTime'>
													<SelectValue placeholder="Сколько времени займет погрузка?" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="до 30 мин">
														До 30 минут
													</SelectItem>
													<SelectItem value="30-60 мин">
														30-60 минут
													</SelectItem>
													<SelectItem value="1-2 часа">
														1-2 часа
													</SelectItem>
													<SelectItem value="более 2 часов">
														Более 2 часов
													</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div>
											<Label htmlFor="unloadingTime">Время на разгрузку</Label>
											<Select
												value={formData.unloadingTime}
												onValueChange={(value) =>
													handleSelectChange("unloadingTime", value)
												}
											>
												<SelectTrigger id='unloadingTime'>
													<SelectValue placeholder="Сколько времени займет разгрузка?" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="до 30 мин">
														До 30 минут
													</SelectItem>
													<SelectItem value="30-60 мин">
														30-60 минут
													</SelectItem>
													<SelectItem value="1-2 часа">
														1-2 часа
													</SelectItem>
													<SelectItem value="более 2 часов">
														Более 2 часов
													</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>

									<div>
										<Label htmlFor="message">Дополнительная информация</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Особенности груза, адреса, пожелания по времени..."
											rows={3}
										/>
									</div>

									<Button
										type="submit"
										className="w-full bg-garant-gold hover:bg-garant-gold-light text-garant-navy font-semibold text-lg py-6"
									>
										<Send className="h-5 w-5 mr-2" />
										Отправить заявку в Telegram
									</Button>

									<p className="text-xs text-gray-500 text-center">
										Нажимая кнопку, вы соглашаетесь на обработку персональных
										данных
									</p>
								</form>
							</CardContent>
						</Card>

						{/* Price Calculator Display */}
						{calculatedPrice && (
							<Card className="border-garant-gold bg-garant-gold/5 mt-5">
								<CardContent className="p-6">
									<div className="flex items-center gap-2 mb-2">
										<Calculator className="h-5 w-5 text-garant-gold" />
										<h3 className="text-lg font-bold text-garant-navy">
											Расчетная стоимость
										</h3>
									</div>
									<div className="text-3xl font-bold text-garant-gold mb-2">
										{calculatedPrice} ₽
									</div>
									<p className="text-sm text-gray-600">
										* Итоговая стоимость может изменяться в зависимости от
										особенностей груза
									</p>
								</CardContent>
							</Card>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
