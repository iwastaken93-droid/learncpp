import { pgTable, serial, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  cadetRank: text("cadet_rank").default("Recruit"),
  points: integer("points").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const completedLessons = pgTable("completed_lessons", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  lessonSlug: text("lesson_slug").notNull(),
  completedAt: timestamp("completed_at").defaultNow(),
});

export const completedProjects = pgTable("completed_projects", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  projectSlug: text("project_slug").notNull(),
  completedAt: timestamp("completed_at").defaultNow(),
});

export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  badgeName: text("badge_name").notNull(),
  earnedAt: timestamp("earned_at").defaultNow(),
});
