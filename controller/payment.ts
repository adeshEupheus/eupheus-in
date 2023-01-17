import { RequestHandler } from "express";
import { generate } from "shortid";
import Razorpay from "razorpay";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
console.log(process.env.RAZORPAY_KEY);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export const payment: RequestHandler = async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.price;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: generate(),
    payment_capture,
  };

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPayment: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);

    const payment = await prisma.payment.create({
      data: req.body,
    });
    res.status(200).json(payment);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};
