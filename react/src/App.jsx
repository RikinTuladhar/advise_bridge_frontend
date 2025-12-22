import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Advisor from "./pages/Advisor";
// import Calculator from "./pages/calculator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/advisor" element={<Advisor />} />
        {/* <Route path="/calculator" element={<Calculator />} /> */}
      </Routes>
    </div>
  );
}

export default App;