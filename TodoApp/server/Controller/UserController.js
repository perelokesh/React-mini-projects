// controllers/authController.js
const User = require('../Models/UserModel');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signupUser = async(req,res) => {
   const {username , password} = req.body;
   const checkUser = await User.findOne({username: username})
   if(checkUser){
    res.status(402).json({message: 'user already exists'})
   } else {
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({username, password:hashedPassword});
    console.log(user);
    await user.save();
    return res.status(200).json({message:"User Created Succesfully"});
   }
};

const loginUser = async(req,res) => {
  const {username, password} = req.headers;
  const user = await User.findOne({username: username});
  const comparePwd = await bcrypt.compare(password, user.password);
  if(user && comparePwd) {
    const token = jwt.sign({
      user:{
        id : user.id,
        username: user.username
      },role: "user",
    }, 
    process.env.Secret,
    {expiresIn:"1h"}
    );
    res.status(200).json({token});
  }else{
    res.status(401).json({message: "Username or password is wrong"});
    throw new Error("Username or password is wrong")
  }
}

module.exports = {signupUser, loginUser}