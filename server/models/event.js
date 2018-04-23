var mongoose = require("mongoose");
var eventSchema = mongoose.Schema({
    title: String,
    location: String,
    user1: String,
    user2: String
})