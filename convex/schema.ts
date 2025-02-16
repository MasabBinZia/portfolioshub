import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  portfolios: defineTable({
    name: v.string(),
    link: v.string(),
    tags: v.optional(v.array(v.string())),
    image: v.string(),
  }),
  submissions: defineTable({
    name: v.string(),
    link: v.string(),
  }),
});
