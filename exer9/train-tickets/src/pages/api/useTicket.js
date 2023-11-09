import { setDriver } from "mongoose";
import deleteTicket from "../../../server/mongodb/actions/deleteTicket"
import { TicketNotFoundError } from "../../../server/mongodb/actions/deleteTicket";

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await deleteTicket(req.query)
        } catch(error) {
            if (error.message === "Ticket not found") {
                return res.status(400).send("Could not find ticket");
            } else {
                return res.status(500).send("Unsuccessful use of ticket");
            }
        }
        
        return res.status(200).send("Successfully used ticket");
    }
}