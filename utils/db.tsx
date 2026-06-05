import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const dbUrl = process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL;
if (!dbUrl) throw new Error("DATABASE_URL or NEXT_PUBLIC_DATABASE_URL must be set");
const sql = neon(dbUrl);
export const db = drizzle(sql, { schema });
