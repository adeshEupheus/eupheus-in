import express from "express";
import {
  createOsLiteRegistration,
  createOsLiteSalesPerson,
  createOsLiteState,
  getAllOsliteState,
  getSalesPersonByState,
} from "../controller/oslite";
import { auth } from "../middleware/auth";
const router = express();

router.route("/registration").post(createOsLiteRegistration);
router.route("/add_state").post(auth, createOsLiteState);
router.route("/add_sales_person").post(auth, createOsLiteSalesPerson);
router.route("/getAllStates").get(getAllOsliteState);
router.route("/getSalesPersonByState").post(getSalesPersonByState);

export default router;
