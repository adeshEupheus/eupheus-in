"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const payment_1 = require("../controller/payment");
const router = express_1.default.Router();
router.route("/").post(payment_1.payment);
router.route("/:id").put(payment_1.updatePayment);
router.route("/addPayment").post(payment_1.createPayment);
router.route("/razorpay_webhook").post(payment_1.changeStatus);
exports.default = router;
