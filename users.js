const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../config/config').get(process.env.NODE_ENV);
const salt=10;
const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const db=require('./config/config').get(process.env.NODE_ENV);


const app=express();

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());


mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});

app.post('/api/register',function(req,res){
   // taking a user
   const newuser=new User(req.body);
   
  if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
   
   User.findOne({email:newuser.email},function(err,user){
       if(user) return res.status(400).json({ auth : false, message :"email exits"});

       newuser.save((err,doc)=>{
           if(err) {console.log(err);
               return res.status(400).json({ success : false});}
           res.status(200).json({
               succes:true,
               user : doc
           });
       });
   });
});
