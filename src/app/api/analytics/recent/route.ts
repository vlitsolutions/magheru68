import { NextResponse } from 'next/server';
import { getRecentRedirects } from '@/lib/analytics';

export async function GET() {
  try {
    const recentAccesses = getRecentRedirects(50);
    return NextResponse.json(recentAccesses);
  } catch (error) {
    console.error('Error fetching recent accesses:', error);
    return NextResponse.json({ error: 'Failed to fetch recent accesses' }, { status: 500 });
  }
}