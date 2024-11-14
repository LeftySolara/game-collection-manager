import { serve } from "@hono/node-server";
import { Hono } from "hono";

import db from "./db/index";

const app = new Hono();
app.get("/", (c) => c.text("Hello World!"));

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
