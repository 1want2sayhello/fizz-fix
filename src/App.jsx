import { BrowserRouter, Routes, Route } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import NotFound from "./pages/Error/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WhyUs from "./pages/WhyUs/WhyUs";
import Menu from "./pages/Menu/Menu";
import Locations from "./pages/Locations/Locations";
import OrderConfirm from "./pages/OrderConfirm/OrderConfirm";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import "./scss/main.scss";
function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/order" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-confirmation" element={<OrderConfirm />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
