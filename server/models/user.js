import mongoose from "mongoose";
import skill from "./skill.js";
import award from "./award.js";

var userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    location: { type: String, required: true },
    gender: String,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "award" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }],
    isMentor: { type: Boolean, required: true }
})

export default mongoose.model("user", userSchema);