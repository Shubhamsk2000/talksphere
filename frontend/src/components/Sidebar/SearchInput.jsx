import { useState } from "react"
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation} = useConversation();
    const { conversations } = useGetConversations();
    const handleSubmit = (e) => {
        e.preventDefault();
        const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        }else{
            toast.error("No user found");
        }
    }
    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" className="rounded-full input input-bordered" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            /> 
            <button type="submit" className="text-white btn-circle bg-sky-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-full p-2 m-auto opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </button>
        </form>
    )
}

export default SearchInput
