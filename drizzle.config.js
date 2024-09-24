/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://Resume%20Builder_owner:RPe1SBs6IdJT@ep-empty-union-a51akwxq.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };