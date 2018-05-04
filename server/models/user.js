import mongoose from "mongoose";

var userSchema = mongoose.Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    birthDate: Date,
    isMentor: Boolean,
    description: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "skill" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "userSchema" }]
})

export default mongoose.model("user", userSchema);
