import "./App.css";
import { OurBrands } from "./components/OurBrands";
import { PriceList } from "./components/PriceList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="w-full max-w-6xl flex flex-col md:flex-row">
        <OurBrands />
        <main className="flex-1 flex items-center justify-center"></main>
        <PriceList />
      </div>
      <footer></footer>
    </>
  );
}

export default App;
