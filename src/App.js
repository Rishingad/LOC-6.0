import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Register/Login";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
