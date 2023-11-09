import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import User from "../models/User.js"

export default async function createUser(data) {
    try {
        await connectDB();
        const addedUser = new User(data);
        await addedUser.save();

    } catch (e) {
        console.log(e)
        throw new Error("Creating Ticket did not work");
    }

}
