const express= require('express');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');
const cookieparser= require('cookie-parser');

const app=express()
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieparser());

app.get('/',function(req,res){
    res.status(200).send('Welcome to Sign Up API');
});

const PORT = process.env.PORT||3000;
app.listen(PORT,()=> {
    console.log(app is live at ${PORT});
});
