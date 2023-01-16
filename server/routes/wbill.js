import express from "express";
import wbillModel from "../models/wbillModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const fetchwbill = await wbillModel.find(); 
  try {
    res.json(fetchwbill); 
  } catch (err) {
    console.log("Error: " + err.message); 
  }
});


router.post('/add', async (req, res) => {
    const postwbill = req.body; 
    const newwbill = new wbillModel(postwbill); 
    try {
        await newwbill.save(); 
        res.json(newwbill); 
    } catch(err) {
        console.log("Error: " + err.message); 

    }

});

router.get("/:id", async (req, res)=> {
  const getId = await wbillModel.findById(req.params.id); 
  try {
    console.log("bill found"); 
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}); 

router.delete("/:id", async (req, res) => {
  const deleteBills = await wbillModel.findByIdAndDelete(req.params.id); 
  try {
    console.log("Bill deleted"); 

  } catch(error) {
    console.log(`Error: ${error}`); 
  }
})

export default router; 