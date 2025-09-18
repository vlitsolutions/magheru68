import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Use /app/data for Docker volume persistence, fallback to local for development
const dataDir = process.env.NODE_ENV === 'production' ? '/app/data' : path.join(process.cwd(), 'data');

// Ensure the data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'analytics.db');
const db = new Database(dbPath);

// Initialize the database
db.exec(`
  CREATE TABLE IF NOT EXISTS redirect_analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page STRING NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_agent STRING,
    ip_address STRING
  )
`);

export interface RedirectAnalytics {
  id: number;
  page: string;
  timestamp: string;
  user_agent?: string;
  ip_address?: string;
}

export function trackRedirect(page: string, userAgent?: string, ipAddress?: string) {
  const stmt = db.prepare(`
    INSERT INTO redirect_analytics (page, user_agent, ip_address)
    VALUES (?, ?, ?)
  `);

  stmt.run(page, userAgent || null, ipAddress || null);
}

export function getRedirectStats(): { page: string; count: number; lastAccess: string }[] {
  const stmt = db.prepare(`
    SELECT
      page,
      COUNT(*) as count,
      MAX(timestamp) as lastAccess
    FROM redirect_analytics
    GROUP BY page
    ORDER BY count DESC
  `);

  return stmt.all() as { page: string; count: number; lastAccess: string }[];
}

export function getRecentRedirects(limit = 50): RedirectAnalytics[] {
  const stmt = db.prepare(`
    SELECT * FROM redirect_analytics
    ORDER BY timestamp DESC
    LIMIT ?
  `);

  return stmt.all(limit) as RedirectAnalytics[];
}

export function clearAllStats() {
  const stmt = db.prepare('DELETE FROM redirect_analytics');
  stmt.run();
}

export function getTotalRedirectCount(): number {
  const stmt = db.prepare('SELECT COUNT(*) as total FROM redirect_analytics');
  const result = stmt.get() as { total: number };
  return result.total;
}