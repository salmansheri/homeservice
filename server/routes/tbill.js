import express from "express";
import tbillModel from "../models/tbillModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const fetchtbill = await tbillModel.find();
  res.json(fetchtbill);
});

router.post("/add", async (req, res) => {
  const posttbill = req.body;
  const newtbill = new tbillModel(posttbill);
  try {
    await newtbill.save();
    res.json(newtbill);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id",async (req, res) => {
  const getId = await tbillModel.findById(req.params.id); 
  try {
    res.json(getId); 

  } catch (error) {
    console.log(`Error: ${error}`); 
  }
}); 

router.delete("/:id", async (req, res)=> {
  const deleteBills = await tbillModel.findByIdAndDelete(req.params.id); 
  try{
    console.log("Bill deleted"); 
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}); 

export default router;
