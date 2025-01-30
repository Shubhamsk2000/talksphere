import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  // this is important to conver the string to object
  const authUser = JSON.parse(localStorage.getItem("authUser"));

  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBg = fromMe ? "bg-blue-500" : "";


  return (

    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBg}  text-white`}>{message.message}</div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message

const extractTime = (time) => {
  if (!time) return ""; // Handle undefined/null cases

  const date = new Date(time);
  const now = new Date();

  // Extract time in HH:MM AM/PM format
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

  // Check if the message was sent today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  // Format the date if the message was sent on a different day
  const dateString = date.toLocaleDateString(undefined, {
    weekday: "short",  // Example: "Mon"
    month: "short",    // Example: "Jan"
    day: "numeric",    // Example: "28"
    year: "numeric"    // Example: "2024"
  });

  return isToday ? timeString : `${dateString} at ${timeString}`;
};
