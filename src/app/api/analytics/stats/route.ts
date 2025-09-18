import { NextResponse } from 'next/server';
import { getRedirectStats } from '@/lib/analytics';

export async function GET() {
  try {
    const stats = getRedirectStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}