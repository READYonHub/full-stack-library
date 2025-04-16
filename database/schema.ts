import { timestamp, date, text, varchar, uuid, integer, pgTable, pgEnum } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"]);
export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
export const BORROW_STATUS_ENUM = pgEnum("borrow_status", ["BORROWED", "RETURNED"]);

export const users = pgTable("users", {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name").notNull(),
    email: varchar("email").notNull().unique(),
    universityId: integer("university_id").notNull().unique(),
    password: text("password").notNull(),
    UniversityCard: text("university_card").notNull(),
    status: STATUS_ENUM("status").notNull().default("PENDING"),
    role: ROLE_ENUM("role").notNull().default("USER"),
    lastActivityDate: date('laste_activity_date').defaultNow(),
    createAt: timestamp("created_at", {
        withTimezone: true,
    }).defaultNow(),
});
