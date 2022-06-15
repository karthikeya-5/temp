const mongoose=require('mongoose');
const { type } = require('os');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    }
});
const User=mongoose.model('User',userSchema);
module.exports=User;