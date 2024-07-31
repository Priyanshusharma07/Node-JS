const mongoose=require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },  
    work:{
        type:String,
        enum:['chef', 'waiter','manager']
    },
    mobile:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number
    }
});



const Person=mongoose.model('Person',personSchema);
module.exports=Person;