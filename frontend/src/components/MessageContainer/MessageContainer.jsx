import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(()=>{
    
    // return is executed when the component is unmounted
    return () => {
      setSelectedConversation(null);
    }
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {
        !selectedConversation ? <NoChatSelected /> : (
          <>
            {/* Header */}
            <div className='px-4 py-2 mb-2 bg-slate-500'>
              <span className='label-text'>To: </span> <span className='font-bold text-gray-900'>{selectedConversation.fullName}</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        )
      }
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center sm:text-lg md:text-xl text-grey-200">
          <p> Welcome {} 👋👋 </p>

        </div>

      </div>
    </>
  )
}
export default MessageContainer;