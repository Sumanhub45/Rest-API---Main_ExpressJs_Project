const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator') 

const educationSchema = mongoose.Schema({
  examinationName: {
    type: String,
    required: true,
  
    lowercase: true,
    trem: true,
    enum: [
      "metric",
      "inter",
      "bachelors",
      "masters",
      "phd",
      "diploma",
      "bba",
      "mba",
    ],
    maxlength: 20,
    minlength: 2,
  },
  councilBoard: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    enum: ["wbbse", "wbbhse", "pseb", "cbse", "icse", "up board", "other"],
    maxlength: 20,
    minlength: 3,
  },
  passingYear: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    maxlength: 4,
    minlength: 4,
  },
  institutionName: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  grade: {
    type: Number,
    required: true,
    trim: true,
    maxlength: 2,
    minlength: 1,
  },
  description: {
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
    default: Date.now,
  },
});
educationSchema.plugin(uniqueValidator)
const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
