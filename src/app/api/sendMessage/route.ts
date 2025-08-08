// import type { NextRequest } from "next/server";

// export async function POST(request: NextRequest) {
// 	try {
// 		const { message } = await request.json();

// 		const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
// 		const telegramChatId = process.env.TELEGRAM_CHAT_ID;

// 		if (!telegramBotToken || !telegramChatId) {
// 			return new Response("Missing Telegram token or chat ID", { status: 500 });
// 		}

// 		const telegramResponse = await fetch(
// 			`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
// 			{
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify({
// 					chat_id: telegramChatId,
// 					text: message,
// 					parse_mode: "HTML",
// 				}),
// 			}
// 		);

// 		if (!telegramResponse.ok) {
// 			const errorText = await telegramResponse.text();
// 			console.error("Telegram API error:", errorText);
// 			return new Response("Telegram API error", { status: 500 });
// 		}

// 		return new Response("Message sent", { status: 200 });
// 	} catch (error) {
// 		console.error("Server error:", error);
// 		return new Response("Internal Server Error", { status: 500 });
// 	}
// }

import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { message } = await request.json();
		console.log("Received message:", message);

		const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
		const telegramChatId = process.env.TELEGRAM_CHAT_ID;

		if (!telegramBotToken || !telegramChatId) {
			console.error("Missing Telegram credentials");
			return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
		}

		const telegramRes = await fetch(
			`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: message,
					parse_mode: "HTML",
				}),
			}
		);

		if (!telegramRes.ok) {
			const errorData = await telegramRes.json();
			console.error("Telegram API error:", errorData);
			return NextResponse.json({ error: "Telegram request failed", details: errorData }, { status: 500 });
		}

		const data = await telegramRes.json();
		console.log("Telegram response data:", data);
		return NextResponse.json({ success: true, data });
	} catch (error) {
		console.error("Unexpected error:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
