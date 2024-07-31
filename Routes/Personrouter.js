const express=require('express');
const router=express.Router();
const Person=require('./../Model/Personn');


router.get('/', (req,res)=>{
    res.send('this is an get method which will use to get the value for the url');
})


router.post('/', async(req,res)=>{
    try{
        const data=req.body;
        
        const newPerson=new Person(data);
        
        const response=await newPerson.save();
        console.log("data saver");
        res.status(200).json(response);
    }catch (err){
        console.log(err);
        res.status(500).json({error:'Internal Server error'});
    }
})


router.get('/show', async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('data Fetched');
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal Server error'});
    }
})


///-------Update command
///here, we use the : thing is use to set the paramerter the we can run only the limited thingh on this URL
router.put('/:id', async(req,res)=>{
    try{
        const Personid=req.params.id;
        const updatePersonData=req.body;

        const response =await Person.findByIdAndUpdate(Personid,updatePersonData,{
            new :true,
            runValidators:true
        });

        if(!response){
            return res.status(404).json({error:'Person Not found'});
        }

        console.log("data Update");
        res.status(200).json(response);


    }catch (err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
})

///delete Command
router.delete('/:id',async(req,res)=>{
    try{
        ///here we talk about the entred id to serach
        const personId=req.params.id;

        ///here wea talk about that id which will alredy present inside our database
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person Not Found'});
        }
        console.log('data delete');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({message:'person Delete Successfully'});
    }
})

module.exports=router;