const mongoose = require('mongoose');
const educationSchema = mongoose.Schema({
    examinationName: {
        type: String,
        required: true
    }
    ,
    councilBoard: {
        type: String,
        required: true
    },
    passingYear: {
        type: String,
        required: true
    },
    institutionName:{
        type: String,
            required: true
    },
    grade: {
        type: Number,
        required: true
    },
    description: {
        type: String
        
    }

})

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;




