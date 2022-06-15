const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
const DB='mongodb://localhost:27017';
mongoose.connect(DB).then(()=>{
    console.log("connection successfull");
}).catch((err)=> console.log("no connection"));
const User=require('./model/userSchema');
app.get('/',async (req,res)=>{
    try{
        const data=await User.find();
        res.json(data);
    }catch(err){
console.log(err);
    }
});
app.post('/insert',  async (req,res)=>{
    const {name,roll}=req.body;
    const user=new User({name:name,roll:roll});
    await user.save();
    console.log(User);
    res.status(201).json({messg:"Success"});

});
app.post('/update',async (req,res)=>{
    const {roll,which,content}=req.body;
    try{
        const data=await User.findOne({roll:roll});
        data.roll=content;
        await data.save();
        res.status(201).json({mssg:"Successfull"});
    }catch(err){
        console.log(err);
    }
});
app.post('/delete',async (req,res)=>{
    const {roll,which,content}=req.body;
    try{
        const data=await User.findOne({roll:roll});
        
        await data.remove();
        res.status(201).json({mssg:"Successfull"});
    }catch(err){
        console.log(err);
    }
});
app.listen(5000,()=>{
    console.log('server is running');
})