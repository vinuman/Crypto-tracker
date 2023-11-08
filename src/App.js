import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App bg-black text-white min-h-screen font-inter max-w-[1800px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
