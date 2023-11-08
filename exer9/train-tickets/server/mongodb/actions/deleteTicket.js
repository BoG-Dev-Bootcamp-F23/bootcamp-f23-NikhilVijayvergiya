import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import User from "../models/User.js"


export default async function deleteTicket(data) {

    try {
        await connectDB();
        const { identifier } = data;
        await User.findByIdAndDelete(identifier);
    } catch (e) {
        console.log(e)
        throw new Error("Deleting Ticket did not work");
    }

}
