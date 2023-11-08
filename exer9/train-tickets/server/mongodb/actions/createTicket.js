import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"


export default async function createTicket(data) {

    try {
        await connectDB();
        const addedTicket = new Ticket();
        await addedTicket.save();
    } catch (e) {
        console.log(e)
        throw new Error("Creating Ticket did not work");
    }

}

