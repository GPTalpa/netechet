import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("Quiz data:", data);

  // здесь можно отправить в AmoCRM

  return NextResponse.json({ success: true });
}
