import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChatSelected = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {
        noChatSelected ? <NoChatSelected /> : (
          <>
            {/* Header */}
            <div className='px-4 py-2 mb-2 bg-slate-500'>
              <span className='label-text'>To: </span> <span className='font-bold text-gray-900'>John doe</span>
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
          <p> Welcome Shubham Kondhalkar 👋👋 </p>

        </div>

      </div>
    </>
  )
}
export default MessageContainer;