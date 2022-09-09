import express from "express";
import {
  createSchool,
  getAllSchools,
  getSingleSchool,
} from "../controller/schools";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/", auth, getAllSchools);
router.post("/addSchool", auth, createSchool);
router.route("/:coupon").get(getSingleSchool);

export default router;
