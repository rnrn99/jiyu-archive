import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const NEED_REVALIDATE_PATH = ['/sitemap.xml'];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const secret = searchParams.get('secret');

    if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET_KEY)
      throw new Error('Failed to revalidate!');

    NEED_REVALIDATE_PATH.forEach((path) => revalidatePath(path));

    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
