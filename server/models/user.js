import mongoose from 'mongoose';

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    type: String,
    description: String,
    skills: [{ skill: String }]
})

export default userSchema;