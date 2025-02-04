import { ObjectId } from "mongodb";
import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({

    lineColor: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    }

});

export default mongoose.models?.Ticket || mongoose.model("Ticket", ticketSchema)

