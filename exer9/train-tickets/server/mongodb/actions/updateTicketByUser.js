import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";
import { TicketNotFoundError } from "./deleteTicket.js";


export default async function updateTicketsByUser(data) {

    try {
        await connectDB();
        const { ticketId, userId } = data;
        const newTicket = await Ticket.findByIdAndUpdate(ticketId, {userId: userId});
        if (!newTicket) {
            throw new TicketNotFoundError();
        }
    } catch (e) {
        if (e.message === "Ticket not found") {
            throw new TicketNotFoundError();
        } else {
            console.log(e)
            throw new Error("Updating Ticket did not work");
        }
    }

}