import mongoose from "mongoose";

var skillSchema = mongoose.Schema({
    skill: { type: String, required: true }
})

export default mongoose.model("skills", skillSchema);