import express from "express";
import { createPayment, payment } from "../controller/payment";

const router = express.Router();

router.route("/").post(payment);
router.route("/addPayment").post(createPayment);

export default router;
