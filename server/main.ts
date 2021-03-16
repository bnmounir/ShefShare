import next from "next";
import express from "express";

const dev = process.env.NODE_ENV != "production";

const app = next({ dev });
const server = express();

app.prepare()
.then(() => {
  server.use(app.getRequestHandler());
  server.listen(0, console.log.bind(console, "Server listening successfully."));
});
