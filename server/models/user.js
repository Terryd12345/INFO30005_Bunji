import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    type: { type: String, required: true },
    description: String,
    skills: [{ skill: String }]
})

export default userSchema;