const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE);
console.log('database is connect');


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;