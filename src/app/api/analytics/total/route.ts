import { NextResponse } from 'next/server';
import { getTotalRedirectCount } from '@/lib/analytics';

export async function GET() {
  try {
    const total = await getTotalRedirectCount();
    return NextResponse.json({ total });
  } catch (error) {
    console.error('Error fetching total count:', error);
    return NextResponse.json({ error: 'Failed to fetch total count' }, { status: 500 });
  }
}