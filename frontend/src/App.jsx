import { Routes, Route, Navigate } from "react-router-dom";
import Home, { Login, SignUp } from "./pages/pagesIndex.js";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

export default function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center h-screen'>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to="/signup" />} />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}
