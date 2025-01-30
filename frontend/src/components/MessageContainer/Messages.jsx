import useGetMessages from "../../hooks/useGetMessages.js"
import Message from "./Message.jsx";
import { useEffect, useRef } from "react";
const Messages = () => {
    const { loading, messages } = useGetMessages();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100)
    }, [messages]);

    return (
        <div className="flex-1 px-4 overflow-auto">
            {
                !loading && messages.length > 0 && messages.map((message, index) => (
                    <div key={index} ref={messagesEndRef} > <Message message={message} /></div>

                ))
            }
            {
                loading && <div className="flex items-center justify-center w-full h-full gap-2">
                    <span className="loading loading-spinner"></span>
                    Loading</div>
            }
            {
                !loading && messages.length === 0 && <div className="flex justify-center w-full h-full">
                    Send a message to start the conversation.</div>
            }
            <div />
        </div>
    )
}

export default Messages
