import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    gender: String,
    state: String,
    city: String,
    isMentor: Boolean,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    learned: [{
        skill: { type: mongoose.Schema.Types.ObjectId, ref: "skill", required: true },
        date: { type: Date, required: true }
    }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    imagePath: String,
    joinDate: Date
});

export default mongoose.model("user", userSchema);
