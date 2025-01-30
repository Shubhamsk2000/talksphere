import {  useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {

    const success = await handleInputErrors({ fullName, username, password, confirmPassword, gender })
    if (!success) return;
    setLoading(true);

    try {

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
      })

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // setuserto local storage
      localStorage.setItem("authUser", JSON.stringify(data.user));
      setAuthUser(data.user);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  };
  return { signup, loading };
};

export default useSignup


const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Confirm password does not match");
    return false;
  }
  return true;
}