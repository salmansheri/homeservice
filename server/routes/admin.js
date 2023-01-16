import express from "express";
import adminModel from "../models/adminModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const fetchAdmin = await adminModel.find();
    res.status(202).json(fetchAdmin);
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router;
