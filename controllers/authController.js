import userModel from "../models/userModel.js";
//  import { 
//      comparePassword, 
//     hashPassword } from "./../helper/authHelper.js";
 import JWT  from 'jsonwebtoken';
 import { hashPassword, comparePassword } from "../helpers/authHelper.js";
export const registerController = async(req, res) => {
    try{
        const   {name,email,password,phone,address,question} = req.body

        if(!name){
            return res.send({ message:'Name is required'})
        }
        if(!email){
            return res.send({ message:'Email is required'})
        }
        if(!password){
            return res.send({ message:'password is required'})
        }
        if(!phone){
            return res.send({ message:'Phone is required'})
        }
        
            


        // if(!question){
        //     return res.send({ message:'Message is required'})
        // }
        // if(!address){
        //     return res.send({ message:'Address is required'})
        // }

        //check user

        const exisitingUser = await userModel.findOne({email})

        //exisiting user

        if(exisitingUser){
            return res.status(200).send({
                success: false,
                message: 'Already Register '
            })
        }
        //reg user
         const hashedPassword = await hashPassword(password)

        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            question,
            
        
        }).save();

        res.status(201).send({
            success:true,
            message:"User Register Sucessfully",
            user,
        });

    }catch(error){
     console.log(error)
     res.status(500).send({
        success:false,
        message: 'Error in Registeration',
        error
     })
    }
};

// //      post login

export const loginController = async(req,res) =>{
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:`Email is not register`
            });
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message: `Invalid Password`
            });
        }

        // token
        const token = await JWT.sign({ _id:user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success:true,
            message:`login succesfully`,
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                // address:user.address,
                role: user.role

            },
            token,
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
};

// forgotPasswordController

// export const forgotPasswordController = async (res,req) => {
//     try {
//         const {email, question, newPassword} = req.body;
//         if(!email){
//             res.status(400).send({message: "Email is required"})
//         }
//         if(!question){
//             res.status(400).send({message: "Question is required"})
//         }
//         if(!newPassword){
//             res.status(400).send({message: "NewPass is required"})
//         }
//         //check

//         const user = await userModel.findOne({email,question});

//         //validation

//         if(!user){
//             return res.status(404).send({
//                 success:false,
//                 message: 'wrong Email or Answer'
//             });
//         }

//         const hashed = await hashPassword(newPassword);
//         await userModel.findByIdAndUpdate(user._id, { password: hashed});
//         res.status(200).send({
//             success:true,
//             message:"Paaword Reset Successfully",
//         });

//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:"Something tghfhg went Wrong",
//             error
//         })
//     }
// };

//test controller

export const testController = (req, res) =>{
  try {
      res.send('protected router')
  } catch (error) {
    console.log(error)
    res.send({error})
  }
}

export const ReviewController = async (req, res) => {
    try {
      const { comment, rating } = req.body;
      // find product
      const product = await userModel.findById(req.params.id);
      // check previous review
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      );
      if (alreadyReviewed) {
        return res.status(400).send({
          success: false,
          message: "Product Alredy Reviewed",
        });
      }
      // review object
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      };
      // passing review object to reviews array
      product.reviews.push(review);
      // number or reviews
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
      // save
      await product.save();
      res.status(200).send({
        success: true,
        message: "Review Added!",
      });
    } catch (error) {
      console.log(error);
      // cast error ||  OBJECT ID
      if (error.name === "CastError") {
        return res.status(500).send({
          success: false,
          message: "Invalid Id",
        });
      }
      res.status(500).send({
        success: false,
        message: "Error In Review Comment API",
        error,
      });
    }
  };