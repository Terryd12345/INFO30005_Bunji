import mongoose from "mongoose";

const stateSchema = mongoose.Schema({
    state: { type: String, required: true },
    cities: [{ type: String, required: true }]
});

export default mongoose.model("state", stateSchema);
