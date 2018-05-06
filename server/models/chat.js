import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    messages: [{
        date: { type: Date, required: true },
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        message: { type: String, required: true }
    }]
});

export default mongoose.model("chat", chatSchema);
