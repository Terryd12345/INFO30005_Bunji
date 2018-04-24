import mongoose from "mongoose";
import skill from "./skill.js"

var userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    isMentor: { type: Boolean, required: true },
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'skill' }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }]
})

export default mongoose.model("user", userSchema);