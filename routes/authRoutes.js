 import express from "express"
 
 import{registerController ,
     loginController,
     productReviewController,
    
    // testController,
    // forgotPasswordController,
 }from "../controllers/authController.js";
// import { isAdmin } from "../middleWare/authMiddleware"
    

const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )

//test router

//Revier router

router.put("/:id/review",  productReviewController);

//  router.post('/forgotpassword', forgotPasswordController)

// router.get('/test',requireSignIn, isAdmin, testController)

// router.get("/user-auth", requireSignIn, (req,res) => {
//      res.status(200).send( {ok: true})
// })

// router.get("/admin-auth", requireSignIn,isAdmin, (req,res) => {
//      res.status(200).send( {ok: true})
// })

export default router;