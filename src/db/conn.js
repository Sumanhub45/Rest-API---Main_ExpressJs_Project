const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Suman1234:Suman1234@cluster0.2apv0gk.mongodb.net/educatoin?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },)
    .then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('Error connecting to MongoDB: ', err);
});
module.exports = mongoose;



