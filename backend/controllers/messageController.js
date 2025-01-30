import Conversation from "../models/conversationsModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participantsId: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participantsId: [senderId, receiverId]
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])
        res.status(201).json({ message: "Message sent successfully", newMessage });
    } catch (error) {
        console.log("Error in Sending message: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        const conversations = await Conversation.findOne({
            participantsId: { $all: [ senderId, receiverId] }
        }).populate("messages");

        if(!conversations){
            return res.status(200).json([]);
        }
        res.status(200).json(conversations.messages);
    } catch (error) {
        console.log("Error in Getting messages: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}