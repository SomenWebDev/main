const userVerifyService = async (code, email, DataModel) => {
  return await DataModel.find({ email: email, otp: code }).count("total");
};
module.exports = userVerifyService;
