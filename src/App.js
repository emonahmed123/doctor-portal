import logo from './logo.svg';
import './App.css';
import Navber from './pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
function App() {
  return (
    <div>
    <Navber></Navber>
    <Routes>
        <Route path="/" element={<Home></Home>}  />
        <Route path="/home" element={<Home></Home>}  />
        <Route path="/about" element={<About></About>}  />
        <Route path="/login" element={<Login></Login>}  />
      </Routes>


    </div>
  );
}

export default App;
