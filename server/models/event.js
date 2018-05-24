import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
});

export default mongoose.model("event", eventSchema);
