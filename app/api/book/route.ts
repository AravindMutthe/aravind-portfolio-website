import { NextRequest, NextResponse } from "next/server";

const EVENT_TYPE_ID = 7363928; // "Intro Call" — cal.com/aravindmutte/intro-call

/**
 * POST /api/book — creates a real Cal.com booking via the v2 API.
 * The API key lives in the CAL_API_KEY env var (Vercel, encrypted) and
 * never reaches the browser. Body: { date: "2026-10-15", time: "10:30", name, email }
 */
export async function POST(req: NextRequest) {
  const key = process.env.CAL_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "booking not configured" }, { status: 503 });
  }

  let body: { date?: string; time?: string; name?: string; email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }
  const { date, time, name, email } = body;
  if (!date || !time || !name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: "date, time, name and email are required" }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{1,2}:\d{2}$/.test(time)) {
    return NextResponse.json({ error: "bad date/time format" }, { status: 400 });
  }
  // Past-date guard (server-side, Asia/Kolkata)
  const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const startLocal = new Date(`${date}T${time}:00+05:30`);
  if (isNaN(startLocal.getTime()) || startLocal <= nowIST) {
    return NextResponse.json({ error: "slot is in the past" }, { status: 400 });
  }

  const res = await fetch("https://api.cal.com/v2/bookings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventTypeId: EVENT_TYPE_ID,
      start: startLocal.toISOString(),
      attendee: {
        name: name.trim(),
        email: email.trim(),
        timeZone: "Asia/Kolkata",
      },
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      data?.error?.message || data?.message || "cal.com rejected the booking";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
  return NextResponse.json({ ok: true, booking: data?.data ?? data });
}
