import express from "express";
import {
  changeStatus,
  createPayment,
  payment,
  updatePayment,
} from "../controller/payment";

const router = express.Router();

router.route("/").post(payment);
router.route("/:id").put(updatePayment);
router.route("/addPayment").post(createPayment);
router.route("/razorpay_webhook").post(changeStatus);

export default router;
