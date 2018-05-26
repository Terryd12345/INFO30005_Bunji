import mongoose from "mongoose";

const learnedSchema = mongoose.Schema({
    skill: { type: mongoose.Schema.Types.ObjectId, ref: "skill", required: true },
    date: { type: Date, required: true }
});

export default mongoose.model("learned", learnedSchema);
