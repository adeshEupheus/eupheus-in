"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOsLiteRegistration = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOsLiteRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oslite = yield prisma.osLiteRegistration.create({
            data: {
                city: req.body.city,
                email: req.body.email,
                dateOfWebinar: req.body.dateOfWebinar,
                Designation: req.body.Designation,
                eupheusSales: req.body.eupheusSales,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobile: req.body.mobile,
                schoolName: req.body.schoolName,
                state: req.body.state,
            },
        });
        return res.status(200).json(oslite);
    }
    catch (error) {
        res.status(500).json({ msg: "something went wrong" });
        console.log(error);
    }
});
exports.createOsLiteRegistration = createOsLiteRegistration;
