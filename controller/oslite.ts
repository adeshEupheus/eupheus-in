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

export const createOsLiteState: RequestHandler = async (req, res) => {
  try {
    const osliteState = await prisma.osLiteState.create({
      data: {
        state: req.body.state,
      },
    });
    return res.status(200).json(osliteState);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);
  }
};

export const createOsLiteSalesPerson: RequestHandler = async (req, res) => {
  try {
    const osliteSalesPerson = await prisma.osLiteSalesPersons.create({
      data: {
        name: req.body.name,
        stateId: req.body.stateId,
      },
    });
    return res.status(200).json(osliteSalesPerson);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);
  }
};

export const getAllOsliteState: RequestHandler = async (req, res) => {
  try {
    const allStates = await prisma.osLiteState.findMany();
    return res.status(200).json(allStates);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);
  }
};
export const getSalesPersonByState: RequestHandler = async (req, res) => {
  try {
    const salesPersons = await prisma.osLiteSalesPersons.findMany({
      where: {
        stateId: req.body.stateId,
      },
    });
    return res.status(200).json(salesPersons);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);
  }
};
