import { Routes, Route } from "react-router-dom";
import Homenav from "./pages/Home";
import Home from "./pages/Home";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count" element={<Welcome />} />

    </Routes>
  </div>
  );
}

export default App;
