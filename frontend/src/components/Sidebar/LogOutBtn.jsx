import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogOutBtn = () => {
  const { logout } = useLogout();
  return (
    <div className="fixed bottom-0 left-0 ">
      <BiLogOut onClick={logout} className="w-8 h-8 text-white cursor-pointer"/>
    </div>
  )
}

export default LogOutBtn
