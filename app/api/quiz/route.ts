import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { contact, quiz } = data;

  const { name, phone, customValue } = contact;
  const { foundation, lvlWater, service, term } = quiz || {};

  const message = `
📩 Новая заявка

👤 Имя: ${name ?? "-"}
📞 Телефон: ${phone ?? "-"}
💬 Сообщение: ${customValue ?? "-"}

Тип фундамента: ${foundation ?? "-"}
Уровень грунтовых вод: ${lvlWater ?? "-"}
Услуга: ${service ?? "-"}
Когда готовы встретиться: ${term ?? "-"}
  `;
  console.log("Quiz data:", quiz);

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    },
  );

  return NextResponse.json({ success: true });
}
