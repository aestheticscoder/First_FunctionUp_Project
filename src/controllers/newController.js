const newModel = require("../models/newModel");

const registerUser = async function (req, res) {
  try {
    const user = new newModel(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const loginUser = async function (req, res) {
  const { emailId, password } = req.body;

  try {
    const user = await newModel.findOne({ emailId });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: user._id }, "your-secret-key");
    res.json({ status: true, data: { token } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const getUserDetails = async function (req, res) {
  try {
    const user = await newModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const updateUserDetails = async function (req, res) {
  try {
    const user = await newModel.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteUserDetails = async function (req, res) {
  try {
    const user = await newModel.findByIdAndUpdate(
      req.params.userId,
      { isDeleted: true },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.getUserDetails = getUserDetails;
module.exports.updateUserDetails = updateUserDetails;
module.exports.deleteUserDetails = deleteUserDetails;
