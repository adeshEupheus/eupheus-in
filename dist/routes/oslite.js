"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const oslite_1 = require("../controller/oslite");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.default)();
router.route("/registration").post(oslite_1.createOsLiteRegistration);
router.route("/add_state").post(auth_1.auth, oslite_1.createOsLiteState);
router.route("/add_sales_person").post(auth_1.auth, oslite_1.createOsLiteSalesPerson);
router.route("/getAllStates").get(oslite_1.getAllOsliteState);
router.route("/getSalesPersonByState").post(oslite_1.getSalesPersonByState);
exports.default = router;
