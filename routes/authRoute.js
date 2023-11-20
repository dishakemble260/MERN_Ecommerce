import express from "express";
import
 { registerController, 
   loginController,
   testController,
   updateProfileController,
   getAllOrdersController,
   getAllUserOrdersController,
   orderStatusController
} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login',loginController);

//test routes
router.get('/test',requireSignIn, isAdmin ,testController);

//protected User route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
  res.status(200).send({ok: true});
});

//protected Admin route auth
router.get("/admin-auth",requireSignIn,(req,res)=>{
  res.status(200).send({ok: true});
});

//update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders', requireSignIn , getAllOrdersController)

// All orders
router.get('/all-orders', requireSignIn ,isAdmin , getAllUserOrdersController)

// order status update
router.put("/order-status", requireSignIn, isAdmin, orderStatusController)

export default router;
