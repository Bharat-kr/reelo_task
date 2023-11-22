//Packages
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const logger = require("./utils/logger");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(morgan("common", { stream: logger.stream }));

// Routes imports
const routes = require("./routes/index.js");

app.use("/api", routes);

app.get("/", (_, res) => {
  res.status(200).send("Server up and running ");
});

module.exports = app;
