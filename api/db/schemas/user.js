const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email:{ // assign an object in order to add constraints to a field
    type:mongoose.Schema.Types.String,
    required:true,
    unique:true
  },
  password:{
    type:mongoose.Schema.Types.String,
    required:true,
  },
  createdAt:{
    type: mongoose.Schema.Types.Date,
    default:Date.now()
  }
})
// creating the users collection using the above defined schema, that model will be used to query the collection
const User = mongoose.model("Users",UserSchema)

module.exports = User;