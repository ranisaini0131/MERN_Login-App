import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    address: { type: String },
    profile: { type: String },
})

const User = mongoose.model('User', UserSchema)
export default User
