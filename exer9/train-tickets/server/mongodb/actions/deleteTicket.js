import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import User from "../models/User.js"
import Ticket from "../models/Ticket.js";


export default async function deleteTicket(data) {

    try {
        await connectDB();
        const { identifier } = data;
        const user = await Ticket.findByIdAndDelete(identifier);
        if (!user) {
            throw new Error("Ticket not found");
        }
    } catch (e) {

        if (e.message === "Ticket not found") {
            throw new TicketNotFoundError();
        } else {
            throw new Error("Deleting Ticket did not work");
        }
    }

}


class TicketNotFoundError extends Error {
    constructor(message = "Ticket not found") {
        super(message);
        this.name = "TicketNotFoundError";
    }
}

export { TicketNotFoundError };