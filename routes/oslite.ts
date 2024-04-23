import express from "express";
import { createOsLiteRegistration } from "../controller/oslite";
const router = express();

router.route("/registration").post(createOsLiteRegistration);

export default router;
