import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config({
  path: "./config/config.env",
});
const app = express();

// Using Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: "http://127.0.0.1:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Importing routes
import user from "./routes/user.js";
import course from "./routes/course.js";

app.use("/api/v1", user);
app.use("/api/v1", course);

export default app;

app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href="http://127.0.0.1:5173">here</a> to visit frontend.</h1>`
  )
);

app.use(ErrorMiddleware);
