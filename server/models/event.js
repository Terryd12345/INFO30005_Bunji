import mongoose from "mongoose";
import user from "./user.js";

var eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
})

export default mongoose.model("event", eventSchema);
