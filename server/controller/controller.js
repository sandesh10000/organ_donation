
const organschema = require("../model/organ");
const organdon = async (req, res, next) => {
  const { first_name, last_name, email, organ } = req.body;
  try {
    // storing our user data into database
    const response = await organschema.create({
      first_name,
      last_name,
      email,
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
module.exports = { organdon };