
const express=require('express');
const app=express();
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());    ////in this step we collect the data and araning it into a required format

// const Person=require('./Model/Personn');
// const menu_item = require('./Model/Menu');




app.get('/', (req,res)=>{
    res.send('Welcome to my hotel ....  How i can Help you? we have list of menus ');
})

const personRoutes=require('./Routes/Personrouter');
const menuitem=require('./Routes/menuitemsRoutes');


app.use('/person',personRoutes);
app.use('/menuitem',menuitem);




app.listen(3000,()=>{
    console.log('listing on port 3000');
})


