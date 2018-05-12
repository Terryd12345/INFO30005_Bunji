import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    googleID: { type: String, required: true },
    firstName: String,
    lastName: String,
    birthDate: Date,
    gender: String,
    state: String,
    city: String,
    isMentor: Boolean,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    learnedSkills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    imagePath: String
});

export default mongoose.model("user", userSchema);
