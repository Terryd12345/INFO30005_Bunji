import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    gender: String,
    location: String,
    isMentor: Boolean,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    learnedSkills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    imagePath: String
});

export default mongoose.model("user", userSchema);
