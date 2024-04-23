import { RequestHandler } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNews: RequestHandler = async (req, res) => {
  try {
    const news = await prisma.news.create({
      data: req.body,
    });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
    console.log(error);

    // res.json(error)
  }
};

export const getAllNews: RequestHandler = async (req, res) => {
  try {
    const allNews = await prisma.news.findMany();
    res.status(200).json(allNews);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "something went wrong" });
  }
};

export const getSingleNews: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await prisma.news.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

export const upadateNews: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedNews = await prisma.news.update({
      where: {
        id: Number(id),
      },
      data: req.body,
    });
    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};

export const deleteNews: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.news.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ msg: "news has been deleted" });
  } catch (error) {
    res.status(500).json({ msg: "something went wrong" });
  }
};
