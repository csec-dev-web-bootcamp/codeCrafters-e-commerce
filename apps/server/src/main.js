import cors from "cors";
import "dotenv/config";
import express from "express";
import { HttpException } from "./common/http-exception.js";
import { corsOptions } from "./config/cors-options.js";
import productsController from "./products/products.controller.js";
import usersController from "./users/users.controller.js";
import { httpExceptionHandler } from "./middlewares/http-exception-handler.js";
import authController from "./auth/auth.controller.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.use("/products", productsController);
app.use("/auth", authController);
app.use("/users", usersController);

app.all("*", (req, res) => {
  throw new HttpException("Not Found", 404);
});

app.use(httpExceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
