const Discount = () => {
	return (
		<div className="mt-6 sm:mt-8 inline-block bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow ring-1 ring-black/10 hover:shadow-md transition duration-300 text-xs xs:text-sm sm:text-base mx-2 xs:mx-0">
			<span className="hidden xs:inline">
				🎁 Скидка 10% для новых клиентов при заказе через сайт
			</span>
			<span className="xs:hidden">-10% онлайн-заказ 🎁</span>
		</div>
	)
}

export default Discount
