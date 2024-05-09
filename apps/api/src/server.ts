import cors from "cors";
import express from "express";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3333, () => {
  console.log("Server on, in port 3333");
});
