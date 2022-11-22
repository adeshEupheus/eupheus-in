import express from "express";
import { createUnsubscrie, getAllUnsubscribe } from "../controller/unsubscribe";
// import { createPayment, payment } from "../controller/payment";

const router = express.Router();

router.route("/").get(getAllUnsubscribe).post(createUnsubscrie);

export default router;
