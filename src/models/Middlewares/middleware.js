const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.header["x-auth-token"];
  if (!token) {
    return res.status(401).json({ error: "Access denied. Token missing." });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Invalid token." });
  }
};

module.exports.authenticateToken = authenticateToken;
 