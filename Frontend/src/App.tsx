import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
