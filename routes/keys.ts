import express, { RequestHandler } from "express";
const router = express();

router.route("/").get((req, res) => {
  try {
    res.status(200).json({
      accessKey: process.env.ACCESS_KEY,
      secretKey: process.env.SECRET_KEY,
    });
  } catch (error) {
    console.log(error);
  }
});
router.route("/razorpay").get((req, res) => {
  try {
    res.status(200).json({
      key: process.env.RAZORPAY_KEY,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
