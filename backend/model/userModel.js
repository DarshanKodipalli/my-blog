var mongoose = require("mongoose");

var userModel = new mongoose.Schema({
    firstName : {type:String},
    lastName : {type:String},
    emailId : {type:String},
    contactInfo : {type:String},
    address : {type:String}
})

module.exports = mongoose.model("userModel", userModel);