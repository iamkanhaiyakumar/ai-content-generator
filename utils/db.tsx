import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// ... existing imports ...

const dbUrl = process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL || "postgres://dummy:dummy@localhost/dummy";
const sql = neon(dbUrl);
const localDb = drizzle(sql);
export { localDb as db };

// ... rest of the file ...

// Ensure this file exists in utils directory
import { db } from '@/utils/db'; // Adjust if necessary
