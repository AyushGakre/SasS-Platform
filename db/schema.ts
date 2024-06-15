import { pgTable, text} from "drizzle-orm/pg-core";

export const accounts = pgTable('accounts', {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userid: text("user_id").notNull()
})