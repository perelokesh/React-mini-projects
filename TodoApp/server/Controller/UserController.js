// controllers/authController.js
const User = require('../Models/UserModel');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signupUser = async(req,res) => {
  try {
    const {username, password} =req.body;
    const checkUser = await User.findOne({username: username})
    if(checkUser){
      res.status(402).json({message: 'user already exists'})
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = new User({username, password:hashedPwd});
    await user.save();
    res.json({message:"User created successfully"})
  } catch (error) {
    res.status(500).json({error: 'Registration failed'})
  }
};

const loginUser = async(req,res) => {
  const {username} = req.body;
  const user = new User({username});
  await user.save();
  const token = jwt.sign({username}, process.env.SECRET, {expiresIn:'1h'});
  // res.cookie('jwt', token,{httpOnly:true}).send({token});
  res.json(token);
}

module.exports = {signupUser, loginUser}