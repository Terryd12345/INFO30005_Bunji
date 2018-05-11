import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    skill: { type: String, required: true },
    imagePath: String
});

export default mongoose.model("skill", skillSchema);
