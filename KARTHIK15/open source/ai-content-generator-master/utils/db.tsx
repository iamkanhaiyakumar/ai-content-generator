import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const dbUrl = process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL || "postgres://dummy:dummy@localhost/dummy";
const sql = neon(dbUrl);
export const db = drizzle(sql, { schema });
