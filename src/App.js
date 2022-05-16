import logo from './logo.svg';
import './App.css';
import Navber from './pages/Shared/Navber';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/Home/About/About';
import Login from './pages/Login/Login';
import Appoinment from './pages/Appoinment/Appoinment';
import Singup from './pages/Login/Singup';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppoinment from './pages/Dashboard/MyAppoinment';
import Myreview from './pages/Dashboard/Myreview';
function App() {
  return (
    <div className=' max-w-7xl mx-auto px-20'>
    <Navber></Navber>
    <Routes>
        <Route path="/" element={<Home></Home>}  />
        <Route path="/home" element={<Home></Home>}  />
        <Route path="/about" element={<About></About>}  />
        <Route path="/login" element={<Login></Login>}  />
     
        <Route path="/appointment" element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>
        }  />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }  >
            <Route index element={<MyAppoinment></MyAppoinment>}></Route>
            <Route path='review' element={<Myreview></Myreview>}></Route>

        </Route>


        <Route path="/sigup" element={<Singup></Singup>}  />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
