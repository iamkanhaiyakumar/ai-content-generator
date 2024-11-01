import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// ... existing imports ...

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!);
const localDb = drizzle(sql);
export { localDb as db };

// ... rest of the file ...

// Ensure this file exists in utils directory
import { db } from '@/utils/db'; // Adjust if necessary
