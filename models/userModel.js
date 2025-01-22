import mongoose from "mongoose";


// REVIEW MODAL
const reviewSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "name is require"],
      },
      rating: {
        type: Number,
        default: 0,
      },
      comment: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating",
        required: [true, "user require"],
      },
    },
    { timestamps: true }
  );
  
  //user MODAL


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
    },


    //REview
    reviews: [reviewSchema],

    rating: {
        type: Number,
        default: 0,
      },

      numReviews: {
        type: Number,
        default: 0,
      },
    
}, {timestamps:true})

export default mongoose.model('rating',userSchema)