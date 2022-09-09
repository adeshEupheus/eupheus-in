import { RequestHandler } from "express";
import { generate } from "shortid";
import Razorpay from "razorpay";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSchool: RequestHandler = async (req, res) => {
  try {
    const school = await prisma.schools.create({
      data: req.body,
    });
    res.status(200).json(school);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getAllSchools: RequestHandler = async (req, res) => {
  try {
    const allSchools = await prisma.schools.findMany();
    res.status(200).json(allSchools);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getSingleSchool: RequestHandler = async (req, res) => {
  try {
    const coupon = req.params.coupon;
    const school = await prisma.schools.findUnique({
      where: {
        coupon: coupon,
      },
    });
    res.status(200).json(school);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};
