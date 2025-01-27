import Conversation from "./Conversation.jsx";
const Conversations = () => {
    return (
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </div>
    )
}

export default Conversations;
