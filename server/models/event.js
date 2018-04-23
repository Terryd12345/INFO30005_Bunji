import mongoose from 'mongoose';

var eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    user1: { type: String, required: true },
    user2: String
})

export default mongoose.model('events', eventSchema);