const SendEmailUtility = require("../utility/SendEmail");
const UserModel = require("../models/UserModel");
const userOTPService = require("../services/userService/userOtpService");
const userVerifyService = require("../services/userService/userVerifyService");
const jwt = require("jsonwebtoken");
const { EncodeToken } = require("../services/userService/tokenHelper");

const success = "success"; // Define success as a string
const failed = "failed";

exports.UserLogin = async (req, res) => {
  let email = req.params.email;
  let code = Math.floor(100000 + Math.random() * 900000);
  let EmailText = "Your verification code is " + code;
  try {
    await SendEmailUtility(email, EmailText, "PIN Email Verification ");
    // await UserModel.updateOne(
    //   { email: email },
    //   { $set: { otp: code } },
    //   { upsert: true }
    // );
    await userOTPService(code, email, UserModel);

    return res.status(200).json({ status: success, message: "Email sent" });
  } catch (err) {
    return res
      .status(200)
      .json({ status: failed, message: "Something went wrong" });
  }
};
exports.VerifyLogin = async (req, res) => {
  let email = req.params.email;
  let otp = req.params.otp;

  let verify = await userVerifyService(otp, email, UserModel);
  if (verify === 1) {
    // let token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
    //   expiresIn: "1h",
    // });
    let token = EncodeToken(email);
    await userOTPService("0", email, UserModel);
    return res
      .status(200)
      .json({ success: true, message: "Valid OTP", token: token });
  } else {
    return res.status(200).json({ success: false, message: "Invalid OTP" });
  }
};

exports.LogOut = async (req, res) => {
  return res.status(200).json({ success: true, message: "LogOut" });
};
