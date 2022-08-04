import { Routes, Route, Link } from "react-router-dom";
import InputData from "./Pages/InputData";
import ShowData from "./Pages/ShowData";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<InputData/>}></Route>
      <Route path="/showData" element={<ShowData/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
