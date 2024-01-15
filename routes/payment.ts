import express from "express";
import { changeStatus, createPayment, payment } from "../controller/payment";

const router = express.Router();

router.route("/").post(payment);
router.route("/addPayment").post(createPayment);
router.route("/razorpay_webhook").post(changeStatus);

export default router;
