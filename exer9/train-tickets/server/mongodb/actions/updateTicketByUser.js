import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";


export default async function updateTicketsByUser(data) {

    try {
        await connectDB();
        const { userId } = data;
        await Ticket.findByIdAndUpdate(userId, {userId: userId});
    } catch (e) {
        console.log(e)
        throw new Error("Updating Ticket did not work");
    }

}