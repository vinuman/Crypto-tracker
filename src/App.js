import LandingPage from "./components/LandingPage";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <>
      <div className="App bg-black text-white min-h-screen font-inter max-w-[1800px] mx-auto">
        <Header />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
