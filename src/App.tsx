import "./App.css";
import { OurBrands } from "./components/OurBrands";
import { PriceList } from "./components/PriceList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { PRODUCT_RB750 } from "./constants";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row">
        <OurBrands />
        <main className="flex-1 flex flex-col items-center justify-center overflow-hidden">
          <ProductDetails
            product={PRODUCT_RB750}
            download={PRODUCT_RB750.download}
          />
        </main>
        <PriceList />
      </div>
      <footer></footer>
    </>
  );
}

export default App;
