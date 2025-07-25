const userModel = require('../Models/user');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists, please login.", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new userModel({ name, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true
    });

  } catch (error) {
    console.error("Signup Error:", error); // ✅ helpful for debugging
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
}





const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    const errorMess = "Auth failed, user not found or wrong credentials.";

    if (!user) {
      return res.status(403).json({ message: errorMess, success: false });
    }

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch) {
      return res.status(403).json({ message: errorMess, success: false });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      success: true,
      jwtToken,
      email,
      name: user.name
    });

  } catch (error) {
    console.error("Login Error:", error); // ✅ helpful for debugging
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};


module.exports = {
  signup,
  login
};