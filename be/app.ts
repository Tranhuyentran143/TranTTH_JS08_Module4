import "dotenv/config";
import * as express from "express";
import { dbConfig } from "./src/config/db.config";
import * as cors from "cors";
import TaskRoute from "./src/route/task.route";


const port = 3003;

dbConfig
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

app.use("/api/v1/tasks", TaskRoute);


app.listen(8080, () => {
  console.log(`Server running ${port}`);
});