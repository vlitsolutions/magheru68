import { NextResponse } from 'next/server';
import { clearAllStats } from '@/lib/analytics';

export async function POST() {
  try {
    clearAllStats();
    return NextResponse.json({ success: true, message: 'All statistics cleared' });
  } catch (error) {
    console.error('Error clearing stats:', error);
    return NextResponse.json({ error: 'Failed to clear statistics' }, { status: 500 });
  }
}