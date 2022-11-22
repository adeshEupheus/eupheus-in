import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUnsubscrie: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);

    const newUnsubscribe = await prisma.unsubscribe.create({
      data: req.body,
    });
    res.status(200).json(newUnsubscribe);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getAllUnsubscribe: RequestHandler = async (req, res) => {
  try {
    const All = await prisma.unsubscribe.findMany();
    res.status(200).json(All);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};
