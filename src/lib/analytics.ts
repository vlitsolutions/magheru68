import { prisma } from './prisma';

export interface RedirectAnalytics {
  id: number;
  page: string;
  timestamp: Date;
  userAgent?: string | null;
  ipAddress?: string | null;
}

export async function trackRedirect(page: string, userAgent?: string, ipAddress?: string) {
  try {
    await prisma.redirectAnalytics.create({
      data: {
        page,
        userAgent: userAgent || null,
        ipAddress: ipAddress || null,
      },
    });
  } catch (error) {
    console.error('Error tracking redirect:', error);
    throw error;
  }
}

export async function getRedirectStats(): Promise<{ page: string; count: number; lastAccess: Date }[]> {
  try {
    const stats = await prisma.redirectAnalytics.groupBy({
      by: ['page'],
      _count: {
        page: true,
      },
      _max: {
        timestamp: true,
      },
      orderBy: {
        _count: {
          page: 'desc',
        },
      },
    });

    return stats.map(stat => ({
      page: stat.page,
      count: stat._count.page,
      lastAccess: stat._max.timestamp!,
    }));
  } catch (error) {
    console.error('Error getting redirect stats:', error);
    throw error;
  }
}

export async function getRecentRedirects(limit = 50): Promise<RedirectAnalytics[]> {
  try {
    return await prisma.redirectAnalytics.findMany({
      orderBy: {
        timestamp: 'desc',
      },
      take: limit,
    });
  } catch (error) {
    console.error('Error getting recent redirects:', error);
    throw error;
  }
}

export async function clearAllStats() {
  try {
    await prisma.redirectAnalytics.deleteMany();
  } catch (error) {
    console.error('Error clearing stats:', error);
    throw error;
  }
}

export async function getTotalRedirectCount(): Promise<number> {
  try {
    return await prisma.redirectAnalytics.count();
  } catch (error) {
    console.error('Error getting total redirect count:', error);
    throw error;
  }
}