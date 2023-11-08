import mongoose from "mongoose"




const ticketSchema = new mongoose.Schema({

    lineColor: {
        type: String,
        required: true
    },
    Station: {

        type: String,
        required: true


    },
    userId: {
        type: String,
        required: true
    }






})

export default mongoose.models?.Name || mongoose.model("Ticket", ticketSchema)


