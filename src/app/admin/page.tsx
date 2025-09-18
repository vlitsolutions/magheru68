'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RedirectStat {
  page: string;
  count: number;
  lastAccess: Date;
}

interface RedirectAnalytics {
  id: number;
  page: string;
  timestamp: Date;
  userAgent?: string | null;
  ipAddress?: string | null;
}

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'boaz359boaz359';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState<RedirectStat[]>([]);
  const [recentAccesses, setRecentAccesses] = useState<RedirectAnalytics[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      setError('');
      loadAnalytics();
    } else {
      setError('Invalid credentials');
    }
  };

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const [statsRes, recentRes, totalRes] = await Promise.all([
        fetch('/api/analytics/stats'),
        fetch('/api/analytics/recent'),
        fetch('/api/analytics/total')
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json() as Array<{
          page: string;
          count: number;
          lastAccess: string;
        }>;
        // Convert string dates back to Date objects
        const statsWithDates = statsData.map((stat) => ({
          ...stat,
          lastAccess: new Date(stat.lastAccess)
        }));
        setStats(statsWithDates);
      }

      if (recentRes.ok) {
        const recentData = await recentRes.json() as Array<{
          id: number;
          page: string;
          timestamp: string;
          userAgent?: string | null;
          ipAddress?: string | null;
        }>;
        // Convert string dates back to Date objects
        const recentWithDates = recentData.map((access) => ({
          ...access,
          timestamp: new Date(access.timestamp)
        }));
        setRecentAccesses(recentWithDates);
      }

      if (totalRes.ok) {
        const totalData = await totalRes.json() as { total: number };
        setTotalCount(totalData.total);
      }
    } catch (err) {
      console.error('Failed to load analytics:', err);
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  const clearStats = async () => {
    if (!confirm('Are you sure you want to clear all statistics? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch('/api/analytics/clear', { method: 'POST' });
      if (response.ok) {
        await loadAnalytics();
      } else {
        setError('Failed to clear statistics');
      }
    } catch (err) {
      console.error('Failed to clear stats:', err);
      setError('Failed to clear statistics');
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString('ro-RO');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <div className="space-x-4">
            <Button onClick={loadAnalytics} disabled={loading}>
              {loading ? 'Loading...' : 'Refresh'}
            </Button>
            <Button onClick={clearStats} variant="destructive">
              Clear Stats
            </Button>
            <Button onClick={() => setIsAuthenticated(false)} variant="outline">
              Logout
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-2">Total Redirects</h2>
            <div className="text-3xl font-bold text-blue-600">{totalCount}</div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-2">Active Pages</h2>
            <div className="text-3xl font-bold text-green-600">{stats.length}</div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <div className="text-3xl font-bold text-purple-600">{recentAccesses.length}</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Redirect Statistics</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Page</th>
                    <th className="text-left py-2">Count</th>
                    <th className="text-left py-2">Last Access</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((stat, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 font-mono text-sm">{stat.page}</td>
                      <td className="py-2 font-semibold">{stat.count}</td>
                      <td className="py-2 text-gray-600">{formatDate(stat.lastAccess)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {stats.length === 0 && (
                <div className="text-center py-8 text-gray-500">No data available</div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Accesses</h2>
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b sticky top-0 bg-white">
                    <th className="text-left py-2">Page</th>
                    <th className="text-left py-2">Time</th>
                    <th className="text-left py-2">IP</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAccesses.map((access) => (
                    <tr key={access.id} className="border-b">
                      <td className="py-2 font-mono text-sm">{access.page}</td>
                      <td className="py-2 text-gray-600">{formatDate(access.timestamp)}</td>
                      <td className="py-2 font-mono text-sm">{access.ipAddress || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {recentAccesses.length === 0 && (
                <div className="text-center py-8 text-gray-500">No recent accesses</div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}