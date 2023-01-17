import express, { Express } from "express";
const app: Express = express();
app.use(express.json());
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
app.use(cors());

// middleware
import { auth } from "./middleware/auth";

// router
import userRouter from "./routes/user";
import newsRouter from "./routes/news";
import authRouter from "./routes/auth";
import paymentRouter from "./routes/payment";
import schoolRouter from "./routes/schools";
import keyRouter from "./routes/keys";
import UnsubscribeRouter from "./routes/unsubscribe";

app.get("/", (req, res) => {
  res.send("server is working!");
});
app.use("/auth", authRouter);
app.use("/user", auth, userRouter);
app.use("/news", newsRouter);
app.use("/payment", paymentRouter);
app.use("/schools", schoolRouter);
app.use("/keys", keyRouter);
app.use("/unsubscribe", UnsubscribeRouter);

const PORT = process.env.PORT || 5060;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} `);
});
