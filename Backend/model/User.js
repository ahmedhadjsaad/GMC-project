const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  familyName: String,
  email: String,
  password : String,
  role : {
    type : String,
    default : "user"
  },
  ratings : [{}],
  comments : [{}]
  
});

module.exports = Users = mongoose.model('Users', UserSchema);
