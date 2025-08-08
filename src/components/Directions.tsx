import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin } from "lucide-react"

const Directions = () => {
	return (
		<div className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl sm:text-3xl font-bold text-garant-navy mb-8 text-center">
					Другие популярные направления из Симферополя
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<Link href="/simferopol-sevastopol">
						<Card className="hover:shadow-lg transition-shadow cursor-pointer">
							<CardContent className="p-4 text-center">
								<MapPin className="h-6 w-6 text-garant-gold mx-auto mb-2" />
								<h3 className="font-semibold text-garant-navy">
									Севастополь
								</h3>
								<p className="text-sm text-gray-600">79 км • от 6000₽</p>
							</CardContent>
						</Card>
					</Link>

					<Link href="/simferopol-yalta">
						<Card className="hover:shadow-lg transition-shadow cursor-pointer">
							<CardContent className="p-4 text-center">
								<MapPin className="h-6 w-6 text-garant-gold mx-auto mb-2" />
								<h3 className="font-semibold text-garant-navy">Ялта</h3>
								<p className="text-sm text-gray-600">90 км • от 7000₽</p>
							</CardContent>
						</Card>
					</Link>

					<Link href="/simferopol-kerch">
						<Card className="hover:shadow-lg transition-shadow cursor-pointer">
							<CardContent className="p-4 text-center">
								<MapPin className="h-6 w-6 text-garant-gold mx-auto mb-2" />
								<h3 className="font-semibold text-garant-navy">Керчь</h3>
								<p className="text-sm text-gray-600">210 км • от 11000₽</p>
							</CardContent>
						</Card>
					</Link>

					<Link href="/simferopol-feodosia">
						<Card className="hover:shadow-lg transition-shadow cursor-pointer">
							<CardContent className="p-4 text-center">
								<MapPin className="h-6 w-6 text-garant-gold mx-auto mb-2" />
								<h3 className="font-semibold text-garant-navy">Феодосия</h3>
								<p className="text-sm text-gray-600">124 км • от 8000₽</p>
							</CardContent>
						</Card>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Directions
