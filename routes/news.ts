import express from "express";
import {
  createNews,
  deleteNews,
  getAllNews,
  getSingleNews,
  upadateNews,
} from "../controller/news";
import { auth } from "../middleware/auth";

const router = express();

router.route("/").get(getAllNews).post(auth, createNews);
router
  .route("/:id")
  .get(auth, getSingleNews)
  .put(auth, upadateNews)
  .delete(auth, deleteNews);

export default router;
