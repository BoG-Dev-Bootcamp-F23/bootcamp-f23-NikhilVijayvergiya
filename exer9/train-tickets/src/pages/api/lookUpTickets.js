import { TicketNotFoundError } from "../../../server/mongodb/actions/deleteTicket";
import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";



export default async function handler (req, res) {
    if (req.method === "GET") {
        try {
            await readTicketsByUser(req.query);
        } catch(e) {
            if (e.message === "Ticket not found") {
                return res.status(400).send("Ticket not found. Invalid User ID");
            } else {
                return res.status(500).send("Failed retrieving ticket");
            }
        }
        return res.status(200).send("Successfully found ticket");
    }
}