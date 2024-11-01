import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
// Verify the schema file is in the utils directory
import * as schema from '@/utils/schema'; // Update as needed

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    tempalateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt')
    
})