import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    createdDate: { type: Date, required: true }
});

export default mongoose.model("event", eventSchema);
