import createTicket from "../../../server/mongodb/actions/createTicket";


export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createTicket(req.body);
        } catch(e) {
            res.status(500).send("Unsuccessful purchase of a ticket")
        }
        res.status(200).send("Successfully bought ticket")
    }

}