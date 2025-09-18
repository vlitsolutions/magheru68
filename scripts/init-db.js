const { Client } = require('pg');

async function ensureDatabase() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.log('DATABASE_URL not set, skipping database initialization');
    return;
  }

  try {
    // Parse the DATABASE_URL
    const url = new URL(dbUrl);
    const dbName = url.pathname.slice(1); // Remove leading slash

    // Create connection to postgres (default) database for creating our target database
    const adminDbUrl = dbUrl.replace(`/${dbName}`, '/postgres');

    const client = new Client({ connectionString: adminDbUrl });
    await client.connect();

    // Check if database exists
    const result = await client.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName]
    );

    if (result.rows.length === 0) {
      console.log(`Creating database: ${dbName}`);
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database ${dbName} created successfully`);
    } else {
      console.log(`Database ${dbName} already exists`);
    }

    await client.end();
  } catch (error) {
    console.error('Error ensuring database exists:', error.message);
    // Don't fail the process if database creation fails
    console.log('Continuing without database creation...');
  }
}

ensureDatabase();