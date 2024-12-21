import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

const sql = neon(process.env.DATABASE_URL!);
//@ts-expect-error i copied this from the docs
export const db = drizzle({ client: sql });
