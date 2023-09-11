const userOTPService = async (code, email, DataModel) => {
  return await DataModel.updateOne(
    { email: email },
    { $set: { otp: code } },
    { upsert: true }
  );
};

module.exports = userOTPService;
