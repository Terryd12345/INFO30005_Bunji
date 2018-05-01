import mongoose from "mongoose";
import skill from "./skill.js";
import award from "./award.js";

var userSchema = mongoose.Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    isMentor: Boolean,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "award" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }]
})

export default mongoose.model("user", userSchema);
