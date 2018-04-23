var mongoose = require("mongoose");
var chatSchema = mongoose.Schema({
    user1: String,
    user2: String,
    messages: [{
        date: Date,
        sender: String,
        message: String
    }]
})