import express from "express";
import { login } from "../controller/auth";

const router = express.Router()


router.route('/login').post(login)

export default router