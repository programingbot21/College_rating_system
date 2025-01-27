
// import review from '../models/review.js';
// // import JWT  from 'jsonwebtoken';
// export const reviewController = async(req, res) => {
//     try{
//         const   {name,rating, comment} = req.body

//         if(!name){
//             return res.send({ message:'Name is required'})
//         }
//         if(!rating){
//             return res.send({ message:'Email is required'})
//         }
//         if(!comment){
//             return res.send({ message:'password is required'})
//         }
        
//         // if(!address){
//         //     return res.send({ message:'Address is required'})
//         // }

//         //check user

//         const exisitingUser = await review.findOne()

//         //exisiting user

//         if(exisitingUser){
//             return res.status(200).send({
//                 success: false,
//                 message: 'Already given '
//             })
//         }
//         //reg user
        

//         const user = await new review({
//             name,
//             rating,
//             comment,
            
        
//         }).save();

//         res.status(201).send({
//             success:true,
//             message:"User rating Sucessfully",
//             user,
//         });

//     }catch(error){
//      console.log(error)
//      res.status(500).send({
//         success:false,
//         message: 'Error in ratinh',
//         error
//      })
//     }
// };