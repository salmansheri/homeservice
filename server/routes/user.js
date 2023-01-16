import express from 'express'; 
import userModel  from '../models/userModel.js';

const router = express.Router(); 

router.get("/", async (req, res) => {
    try {
         const fetchUser = await userModel.find(); 
         res.status(202).json(fetchUser);
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post("/add", async (req, res)=> {
     const username = req.body.username; 
     const password = req.body.password; 
     const email = req.body.email; 
     const phone = req.body.phone; 
     const name = req.body.name; 
        
    const newUser = new userModel({
        username: username, 
        password:password,
        name: name, 
        phone: phone, 
        email: email,
    }); 
    try {
        await newUser.save(); 
    res.status(200).json(newUser);   

    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
     
        
         
}); 

router.get("/:id", async (req, res) => {
    const getUserId = await userModel.getById(req.params.id); 
    try {
        console.log("User id Found"); 
    } catch (error) {
        console.log(error); 
    }
})

export default router; 