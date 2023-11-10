import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
