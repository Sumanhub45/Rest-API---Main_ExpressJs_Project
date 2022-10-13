const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 10,
    minlength: 10,
  },
  message: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    maxlength: 100,
    minlength: 3,
  },
  created_at: { 
    type: Date,
    required: true,
    default: Date.now 
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
