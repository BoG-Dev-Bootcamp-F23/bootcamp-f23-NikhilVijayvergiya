import mongoose from "mongoose";
import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function createTicket(data) {
    try {
        await connectDB();
        const addedTicket = new Ticket(data);
        await addedTicket.save();
    } catch (e) {
        console.error(e);
        throw new Error("Creating a ticket did not work");
    }
}
