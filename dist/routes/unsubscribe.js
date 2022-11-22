"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const unsubscribe_1 = require("../controller/unsubscribe");
// import { createPayment, payment } from "../controller/payment";
const router = express_1.default.Router();
router.route("/").get(unsubscribe_1.getAllUnsubscribe).post(unsubscribe_1.createUnsubscrie);
exports.default = router;
