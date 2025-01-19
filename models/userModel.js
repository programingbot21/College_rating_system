import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        requried: true,
        trim: true
    },
    email:{
        type: String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true
    },
    phone:{
        type:String,
        requried: true
    }
}, {timestamps:true})

export default mongoose.model('rating',userSchema)