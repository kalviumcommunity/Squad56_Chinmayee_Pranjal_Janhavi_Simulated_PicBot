const mongoose = require("mongoose");
const joi = require("joi");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

const userValidator = (user) => {
  const schema = joi.object({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()  
  });

  return schema.validate(user);
};

const usermodel = mongoose.model("users", userSchema);

module.exports = {
  usermodel,
  userValidator
};
