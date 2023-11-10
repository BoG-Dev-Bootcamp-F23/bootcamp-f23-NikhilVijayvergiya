import { TicketNotFoundError } from "../../../server/mongodb/actions/deleteTicket";
import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";



export default async function handler (req, res) {
    if (req.method === "GET") {
        try {
            const userTickets = await readTicketsByUser(req.query);
            return res.status(200).send(userTickets);
        } catch(e) {
            if (e.message === "User not found") {
                return res.status(400).send("Ticket not found. Invalid User ID");
            } else if (e.message === "Ticket not found") {
                return res.status(400).send("Ticket not found. No Tickets for that user");
            } else {
                return res.status(500).send("Failed retrieving ticket");
            }
        }
        
    }
}