import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const turso = createClient({
  url: "libsql://academia-abdellah.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzM0MDIxODQsImlkIjoiOWEzMGY4ZjYtYjM2My00ZDM4LTk3NDAtNGE3ODNhOGIwMjQ3In0.CBEkmh87WxKgfcagfVhS7mjpqyaQYAPT7L17a0PJKiX11fmqifBDAdoP81XHYxqevyGoMoOF1Eg0YkBVYUgODQ",
});

export const db = drizzle(turso);
