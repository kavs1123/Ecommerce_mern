import mongoose from "mongoose";

const usertable =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true,
        unique:true
    }


},{timestamps:true})


export default mongoose.model('Users',usertable)