import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";


export default async function readTicketsByUser(data) {

    try {
        await connectDB();
        const { userId } = data;
        await Ticket.findById(userId);
    } catch (e) {
        console.log(e)
        throw new Error("Finding Ticket did not work");
    }

}