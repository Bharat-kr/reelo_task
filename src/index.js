require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
const http = require("http");

const app = require("./app");
const logger = require("./utils/logger");

const server = http.createServer(app);
const port = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV || "development";

server.listen(port, () =>
  logger.info(`[BACKEND (http) LISTENING ON PORT:${port} ENV:${NODE_ENV}]`)
);
