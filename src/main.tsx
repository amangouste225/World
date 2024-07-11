import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing.tsx";
import Homepage from "./pages/Homepage.tsx";
import Product from "./pages/Product.tsx";
import NotFound from "./pages/NotFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
