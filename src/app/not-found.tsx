'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Phone, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
			<SEOHead
				title="Страница не найдена - 404"
				description="Запрашиваемая страница не найдена. Вернитесь на главную страницу GARANT для заказа грузоперевозок по Крыму. Симферополь, Севастополь, Ялта, Керчь."
				serviceType="Ошибка 404 - страница не найдена"
				url="https://garantgruz.ru/404"
				breadcrumbs={[
					{
						name: "Главная",
						url: "https://garantgruz.ru",
					},
					{
						name: "Ошибка 404",
						url: "https://garantgruz.ru/404",
					},
				]}
			/>

			<div className="text-center max-w-md mx-auto">
				{/* Error Code */}
				<div className="text-8xl sm:text-9xl font-bold text-garant-navy mb-4">
					404
				</div>

				{/* Error Message */}
				<h1 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-4">
					Страница не найдена
				</h1>

				<p className="text-gray-600 mb-8 text-base sm:text-lg">
					Извините, запрашиваемая страница не существует. Возможно, она была
					удалена или перемещена.
				</p>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href="/" passHref>
						<Button className="bg-garant-navy hover:bg-garant-navy-light text-white flex items-center gap-2 justify-center w-full sm:w-auto">
							<Home className="h-4 w-4" />
							На главную
						</Button>
					</Link>

					<a href="tel:+79788631197" className="w-full sm:w-auto">
						<Button
							variant="outline"
							className="border-garant-gold text-garant-gold hover:bg-garant-gold hover:text-garant-navy flex items-center gap-2 justify-center w-full sm:w-auto"
						>
							<Phone className="h-4 w-4" />
							Позвонить нам
						</Button>
					</a>
				</div>

				{/* Back link */}
				<button
					onClick={() => window.history.back()}
					className="inline-flex items-center gap-2 text-garant-gold hover:text-garant-gold-light transition-colors mt-6"
				>
					<ArrowLeft className="h-4 w-4" />
					Вернуться назад
				</button>
			</div>
		</div>
	);
};

// export default NotFound;
