import mongoose from "mongoose"


const userSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    }, 
    Age: {
        type: int
    }
})







export default mongoose.models?.User || mongoose.model("User", userSchema)


