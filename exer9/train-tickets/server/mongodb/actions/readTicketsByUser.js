import mongoose, { connect } from "mongoose"
import connectDB from "../index.js"
import Ticket from "../models/Ticket.js";
import { TicketNotFoundError } from "./deleteTicket.js";
import User from "../models/User.js";


export default async function readTicketsByUser(data) {

    try {
        await connectDB();
        const { identifier } = data;
        
        const ticket =  await Ticket.find({userId: identifier});
        if (ticket.length === 0) {
            const user = await User.findById(identifier);
            if (!user) {
                console.log("Hello)")
                throw new UserNotFoundError();
            } else {
                throw new TicketNotFoundError();
            }
        } else {
            return ticket;
        }
    } catch (e) {
        if (e.message === "Ticket not found") {
            throw new TicketNotFoundError();
        } else if (e.message === "User not found") {
            throw new UserNotFoundError();
        }
        console.log(e)
        throw new Error("Finding Ticket did not work");
    }

}

class UserNotFoundError extends Error {
    constructor(message = "User not found") {
        super(message);
        this.name = "UserNotFoundError";
    }
}

export { TicketNotFoundError };
