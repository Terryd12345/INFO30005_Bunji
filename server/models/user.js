import mongoose from "mongoose";
import skill from "./skill.js"

var userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    type: { type: String, required: true },
    description: String,
    skills: [skill]
})

export default mongoose.model("users", userSchema);