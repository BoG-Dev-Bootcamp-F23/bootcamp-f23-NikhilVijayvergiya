import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";
import { TicketNotFoundError } from "./deleteTicket.js";


export default async function readTicketsByUser(data) {

    try {
        await connectDB();
        const { identifier } = data;
        const ticket =  await Ticket.find({userId: identifier});
        console.log(ticket);
        if (ticket.length === 0) {
            console.log("Hello)")
            throw new TicketNotFoundError();
        }
    } catch (e) {
        if (e.message === "Ticket not found") {
            throw new TicketNotFoundError();
        }
        console.log(e)
        throw new Error("Finding Ticket did not work");
    }

}