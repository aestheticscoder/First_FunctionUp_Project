const jwt = require('jsonwebtoken');
const validation = async function (req,res, next){
  const token = req.headers['x-auth-token'];
  if(!token) return res.status(400).json({msg: " Token Missing"});
  const decoded = await jwt.verify(token, 'Vishal-Secret-Key');
  if(!decoded) return res.status(400).json({msg: "Invalid Token"});
  next();
}

module.exports.validation = validation;