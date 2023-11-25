import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import Compare from "./pages/Compare";
import { Routes, Route } from "react-router-dom";
import WatchList from "./pages/WatchList";
import { useSelector } from "react-redux";
import { currentLightTheme } from "./slices/darkModeSlice";

function App() {
  const light = useSelector((state) => currentLightTheme(state).light);
  return (
    <>
      <div
        className={`App min-h-screen font-inter max-w-[1800px] mx-auto ${
          light ? "bg-white" : " bg-gray"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/coin/:id" element={<CoinPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
