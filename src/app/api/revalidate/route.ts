// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";


export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    await revalidatePath("/");

    // Add other pages to revalidate as needed:
    // await revalidatePath("/culture");
    // await revalidatePath("/food");
    // await revalidatePath("/travel");

    return NextResponse.json({ revalidated: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ message: "Revalidation failed", error: message }, { status: 500 });
  }
}
