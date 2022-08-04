import { Routes, Route, Link } from "react-router-dom";
import InputData from "./Pages/InputData";
import Navbar from "./Pages/Navbar";
import ShowData from "./Pages/ShowData";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<InputData/>}></Route>
      <Route path="/showData" element={<ShowData/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
