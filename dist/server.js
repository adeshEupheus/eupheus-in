"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
app.use((0, cors_1.default)());
// middleware
const auth_1 = require("./middleware/auth");
// router
const user_1 = __importDefault(require("./routes/user"));
const news_1 = __importDefault(require("./routes/news"));
const auth_2 = __importDefault(require("./routes/auth"));
const payment_1 = __importDefault(require("./routes/payment"));
const schools_1 = __importDefault(require("./routes/schools"));
const keys_1 = __importDefault(require("./routes/keys"));
const unsubscribe_1 = __importDefault(require("./routes/unsubscribe"));
app.get("/", (req, res) => {
    res.send("server is working!");
});
app.use("/auth", auth_2.default);
app.use("/user", auth_1.auth, user_1.default);
app.use("/news", news_1.default);
app.use("/payment", payment_1.default);
app.use("/schools", schools_1.default);
app.use("/keys", keys_1.default);
app.use("/unsubscribe", unsubscribe_1.default);
const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} `);
});
