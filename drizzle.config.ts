import { type Config } from "drizzle-kit";

import { env } from "note/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["post_it_*"],
} satisfies Config;
