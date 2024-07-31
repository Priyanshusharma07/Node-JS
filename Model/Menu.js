const mongoose=require('mongoose')

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:2
    },
    tast:{
        type:String,
        enum:['sweet' ,'sour','spicy'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const menu_item=mongoose.model('MenuItems',menuItemSchema);
module.exports=menu_item;