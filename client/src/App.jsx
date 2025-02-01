
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

// UseContext for User Provider
import { UserProvider } from "./components/Context/UserContext";

function App() {

  return (
    <div>
      <UserProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={ <Home/>} />
        <Route path="/home" element={<Home/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
