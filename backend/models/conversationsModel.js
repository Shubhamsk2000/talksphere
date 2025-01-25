import mongoose from "mongoose";
const ConversationsSchema = new mongoose.Schema({
    participantsId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model("Conversation", ConversationsSchema);
export default Conversation;