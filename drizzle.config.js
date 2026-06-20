// /** @type { import("drizzle-kit").Config } */
// export default {
//     schema: "./utils/schema.tsx",
//     dialect: 'postgresql',
//     dbCredentials: {
//       url: process.env.DATABASE_URL || process.env.NEXT_PUBLIC_DATABASE_URL,
//     }
//   };

import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load variables from .env.local
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});