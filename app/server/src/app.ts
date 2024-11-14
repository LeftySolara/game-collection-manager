import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { db, checkAppVersion } from "./db/index";

(async () => {
  await checkAppVersion(db);
})();

const app = new Hono();
app.get("/", (c) => c.text("Hello World!"));

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
