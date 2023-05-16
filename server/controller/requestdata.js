const requestschema = require("../model/request");
const requestorgandata = async (req, res, next) => {
  const { name, email, phone, message, organ } = req.body;
  try {
    // storing our user data into database
    const response = await requestschema.create({
      name,
      email,
      phone,
      message,
      organ,
    });
    return res.redirect("/");
  } catch (error) {
    console.log(JSON.stringify(error));
    if (error.code === 11000) {
      return res.send({ status: "error", error: "email already exists" });
    }
    throw error;
  }
};
module.exports = { requestorgandata };
