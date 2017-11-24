const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model

const userSchema = new Schema({
  email: {type: String, lowercase: true, unique: true},
  password: String
});

// create model   class

const modelUserClass = mongoose.model('user',userSchema);

// export model class
module.exports = modelUserClass;
