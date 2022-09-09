import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ msg: "please provide email and password" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(200).json({ err: "Wrong Email", status: 401 });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user!.password);

  if (!isPasswordCorrect) {
    return res.status(200).json({ err: "Wrong Password", status: 401 });
  }

  const token = jwt.sign(
    { userId: user!.id },
    `${process.env.JWT_SECRET_KEY}`,
    { expiresIn: process.env.JWT_LIFETIME }
  );

  return res.status(200).json({ userId: user?.id, token: token, status: 200 });
};
