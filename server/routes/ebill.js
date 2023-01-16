import express from 'express'; 
import ebillModel from '../models/ebillModel.js';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const fetchebill = await ebillModel.find(); 
    try {
        res.json(fetchebill); 
    } catch (err) {
        console.log("Error: " + err);
    }

}); 


router.post('/add', async (req, res) => {
    const postebill = req.body; 
    const newebill = new ebillModel(postebill); 
    try {
        await newebill.save(); 
        res.json(newebill); 
    } catch(err) {
        console.log("Error: " + err);
    }
})

router.get("/:id",  async (req, res) => {
    const getId = await ebillModel.findById(req.params.id); 
    try {
        res.json(getId); 
        console.log(getId);
    } catch (err) {
        console.log(`Error: ${err}`)
    }
})

router.delete("/:id", async (req, res) => {
    const deleteBills = await ebillModel.findByIdAndDelete(req.params.id); 
    try {
        console.log("Bills deleted"); 

    } catch (err) {
        console.log(`Error: ${deleteBills}`);
    }
})

export default router; 