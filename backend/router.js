import { Router } from "express";
import * as user from "./requestHandler.js";
//import Auth from "./middleware/Auth.js";

const router=Router();


router.route("/signup").post(user.signUp); 
router.route("/signin").post(user.signIn);


export default router;