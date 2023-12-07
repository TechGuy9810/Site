import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register =async (req,res)=>{
try{
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password,salt);
const newUser = new User({
    name:req.body.name,
    phone:req.body.phone,
    email:req.body.email,
    password:hash,
});
await newUser.save();
res.status(200).send("user has been created");
}
catch(err)
{
console.log(err);
}
}
export const login = async (req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        });
       if(!user) return console.log("not found");
       const pc = await bcrypt.compare(req.body.password,user.password);
       if(!pc) return console.log("password not correct");
       res.status(200).json(user);
        }
        catch(err)
        {
        console.log(err);
        }
};
export const logout = (req,res)=>{

};