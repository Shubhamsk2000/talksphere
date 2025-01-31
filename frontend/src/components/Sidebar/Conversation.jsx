import  {useSocketContext} from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers?.includes(conversation._id);
    return (
        <>
            <div className={`flex items-center gap-2 p-2 py-1 my-2 rounded-md cursor-pointer hover:bg-sky-500 hover:text-white ${isSelected && 'bg-sky-500 text-white'}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? 'online':""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user-avatar" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold">{conversation.fullName}</p>
                </div>
            </div>
            <div className="h-1 p-0 m-0 divider"></div>
        </>
    )
}

export default Conversation;
