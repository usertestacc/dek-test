import { Toaster } from "react-hot-toast"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Sidebar from "./Components/Sidebar"
import Signup from "./Pages/SignUp"
import Likes from "./Pages/Likes"
import Explore from "./Pages/Explore"
import { useAuthContext } from "./context/AuthContext";

function App() {

  const { authUser, loading } = useAuthContext();
  if (loading) return null
  return (
    <>
      <div className="flex text-white">
        <Sidebar />
        <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={!authUser ? <Login /> : <Navigate to={"/login"} />} />
            <Route exact path="/Signup" element={!authUser ? <Signup /> : <Navigate to={"/login"} />} />
            <Route path="/likes" element={!authUser ? <Likes /> : <Navigate to={"/login"} />} />
            <Route path="/explore" element={!authUser ? <Explore /> : <Navigate to={"/login"} />} />
          </Routes>
          <Toaster />
        </div>
      </div>

    </>
  )
}

export default App
