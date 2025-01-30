
import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {
                loading ? <span className="loading loading-spinner"></span> :
                    conversations?.map((conversation) => (
                        <Conversation
                            key={conversation._id}
                            conversation={conversation}
                        />
                    ))
            }
        </div>
    )
}

export default Conversations;
