import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOsLiteRegistration: RequestHandler = async (req, res) => {
  try {
    const oslite = await prisma.osLiteRegistration.create({
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
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);
  }
};
