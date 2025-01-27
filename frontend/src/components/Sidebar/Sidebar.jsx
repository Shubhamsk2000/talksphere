import Conversations from "./Conversations.jsx";
import SearchInput from "./SearchInput.jsx";
import LogOutBtn from "./LogOutBtn.jsx";
const Sidebar = () => {
  return (
    <div >
      <SearchInput/>
      <div className="h-1 p-0 mt-4 divider"></div>
      <Conversations/>
      <LogOutBtn/>
    </div>
  )
}

export default Sidebar;
