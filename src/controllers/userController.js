const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {
try {
  const user = new userModel(req.body);
  await user.save();
  res.status(201).json(user);
} catch (error) {
  res.status(400).json({error: error.message});
}

};

const loginUser = async function (req, res) {
  const {emailId, password} = req.body;
  const user = await userModel.findOne({emailId : emailId , password : password});
  if(!user)  return  res.status(400).json({msg: "EmailID / Password is Invalid. Please enter valid EmailID and password"});
  const token = await jwt.sign({ userId: user._id.toString()}, 'Vishal-Secret-Key');
  res.status(201).json({msg: token, login: true});
}

const getUserData = async function (req,res){
  const userId = req.params.userId;
  const userData = await userModel.findById(userId);
  if(!userData) return res.status(400).json({msg : "UserId doesn't exist"});
  res.status(200).json({msg: userData});
}

const updateUser = async function (req, res){
  const userId= req.params.userId;
  const value = req.body;
  const user = await userModel.findByIdAndUpdate(userId, {$set: value}, {$new: true});
if(!user) return res.status(400).json({msg: "UserId doesn't exist"})
res.status(201).json({msg: user});
}
const deleteUser = async function (req,res){
  const userId = req.params.userId;
  const user = await userModel.findByIdAndUpdate(userId, {$set : {isDeleted: true}}, {new : true})
  if(!user) return res.status(400).json({msg: "UserId doesn't exist"});
  res.status(200).json({msg: user});
}
module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;