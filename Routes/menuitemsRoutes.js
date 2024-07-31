const express=require('express');
const router=express.Router();
const MenuItems=require('./../Model/Menu');


router.post('/', async(req,res)=>{
    try{
        const data=req.body;
        const newmenu=new MenuItems(data);
        const response=await newmenu.save();
        console.log("data saver");
        res.status(200).json(response);
    }catch (err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})



router.get('/show' , async(req,res)=>{
    try{
        const data= await MenuItems.find();
        console.log('data Fetched');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server error'});
    }
})




module.exports=router;