"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const router = (0, express_1.default)();
router.route('/').get(user_1.getAllUser).post(user_1.createUser);
router.route('/:id').get(user_1.getSingleUser).put(user_1.updateUser).delete(user_1.deleteUser);
exports.default = router;
