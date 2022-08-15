const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.singup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({
        message: "User already registered",
      });
    }
    const { firstName, lastName, email, password, contactNumber } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: Math.random().toString(),
      contactNumber,
    });

    newUser.save((error, data) => {
      if (error) {
        return res.status(200).json({
          message: "Someting went wrong : " + error,
        });
      }
      if (data) {
        return res.status(201).json({
          message: "User registered sucessfulluy",
        });
      }
    });
  });
};

exports.singin = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    console.log("Error", JSON.stringify(error));
    console.log("USER", JSON.stringify(user));
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
          expiresIn: "1h",
        });
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({ message: "something went wrong" });
    }
  });
};
