import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import Compare from "./pages/Compare";
import { Routes, Route } from "react-router-dom";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <>
      <div className="App bg-black text-white min-h-screen font-inter max-w-[1800px] mx-auto">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/coin/:id" element={<CoinPage />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
