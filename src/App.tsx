import { OurBrands } from "./components/OurBrands";
import { PriceList } from "./components/PriceList";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { ProductDetails } from "./components/ProductDetails";
import { PRODUCT_RB750 } from "./constants";
import { Footer } from "./components/Footer";
import { Suggestions } from "./components/Suggestions";

function App() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Navbar />
      <div className="w-full max-w-6xl flex flex-col">
        <div className="w-full flex flex-col-reverse  md:flex-row">
          <OurBrands />
          <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
            <ProductDetails product={PRODUCT_RB750} />
          </div>
          <PriceList />
        </div>

        <Suggestions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
