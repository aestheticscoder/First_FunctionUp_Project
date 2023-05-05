const { route } = require("../routes/route");

const assignmentMW = function (req, res, next) {
  const ipAddress = req.ip;
  var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

  const route = req.originalUrl;
  console.log(`${datetime} - ${ipAddress} - ${route}`);
  next();
};

module.exports.assignmentMW = assignmentMW;
