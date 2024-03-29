"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const db_config_1 = require("./src/config/db.config");
const cors = require("cors");
const task_route_1 = require("./src/route/task.route");
const port = 3003;
db_config_1.dbConfig
    .initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/tasks", task_route_1.default);
app.listen(8080, () => {
    console.log(`Server running ${port}`);
});
