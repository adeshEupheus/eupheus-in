import { RequestHandler } from "express";

import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const createUser: RequestHandler = async (req, res) => {
  try {
    const { username, email } = req.body;
    let password = req.body.password;

    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    const token = jwt.sign(
      { userId: newUser.id },
      `${process.env.JWT_SECRET_KEY}`,
      { expiresIn: process.env.JWT_LIFETIME }
    );
    res.status(201).json({ id: newUser.id, token: token });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getAllUser: RequestHandler = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

export const deleteUser: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ msg: "user has been deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getSingleUser: RequestHandler = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (error) {}
};

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
