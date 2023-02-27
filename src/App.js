import "./App.css";
import { SafeArea } from "antd-mobile";
import { Route, Routes } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import HomePage from "./page/HomePage";
import OrderPage from "./page/OrderPage";

function App() {
  return (
    <div>
      <AppNavigation/>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
