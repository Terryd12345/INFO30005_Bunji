import mongoose from 'mongoose';

var chatSchema = mongoose.Schema({
    user1: { type: String, required: true },
    user2: { type: String, required: true },
    messages: [{
        date: { type: Date, required: true },
        sender: { type: String, required: true },
        message: { type: String, required: true }
    }]
})

export default chatSchema;