import mongoose from "mongoose";

var awardSchema = mongoose.Schema({
    title: { type: String, required: true },
    imagePath: String
})

export default mongoose.model('award', awardSchema);