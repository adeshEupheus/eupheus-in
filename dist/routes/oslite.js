"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const oslite_1 = require("../controller/oslite");
const router = (0, express_1.default)();
router.route("/registration").post(oslite_1.createOsLiteRegistration);
exports.default = router;
