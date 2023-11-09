import updateTicketsByUser from "../../../server/mongodb/actions/updateTicketByUser";


export default async function handler (req, res) {
    if (req.method === "PATCH") {
        try {
            await updateTicketsByUser(req.body);
        } catch(e) {
            if (e.message === "Ticket not found") {
                return res.status(400).send("Invalid Ticket Id");
            }
            return res.status(500).send("Failed updating user");
        }
        return res.status(200).send("Successfully transferred ticket");

    }
}