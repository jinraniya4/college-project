const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    number: {
        type : number,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    email: {
        type : number,
        required : true
    }

});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Signup", userSchema);
