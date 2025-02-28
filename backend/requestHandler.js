import loginSchema from './models/login.model.js';
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
import nodemailer from "nodemailer";
const {sign}=pkg;
const transporter = nodemailer.createTransport({
    service:"gmail",
     auth: {
         user: "ad1821225@gmail.com", 
         pass: "ubva aceg djxv mpts",
     },
   });
   export async function signUp(req,res) {
    try {
        const {email,username,password,cpassword,role}=req.body;
        
        if(!(email&&username&&password&&cpassword&&role))
            return res.status(404).send({msg:"fields are empty"});
  
        if(password!==cpassword)
            return res.status(404).send({msg:"password not matched"})
  
        bcrypt.hash(password,10).then((hashedPassword)=>{
          loginSchema.create({email,username,password:hashedPassword,role}).then(()=>{
                return res.status(201).send({msg:"success"});
            }).catch((error)=>{
                return res.status(404).send({msg:"Not registered"})
            })
        }).catch((error)=>{
            return res.status(404).send({msg:"error"}); 
        })
    } catch (error) {
        return res.status(404).send({msg:"error"});
    }
  }
  
  export async function signIn(req,res) {
      try {
    const {email,password}=req.body;  
  
    if(!(email&&password))
        return res.status(404).send({msg:"feilds are empty"})
  
    const user=await loginSchema.findOne({email})
    if(user===null)
        return res.status(404).send({msg:"invalid email"})
  
    //convert to hash and compare using bcrypt
    const success=await bcrypt.compare(password,user.password);
    if(success!==true)
        return res.status(404).send({msg:"email or password is invalid"})
    //generate token using sign(JWT key)
    const token=await sign({userId:user._id},process.env.JWT_KEY,{expiresIn:"24h"});
    return res.status(200).send({msg:"Succefully logged in",token})
      } catch (error) {
          return res.status(404).send({msg:"error"});
      }
  }