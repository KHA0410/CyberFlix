import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import HeaderFlix from "./components/HeaderFlix/HeaderFlix";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderFlix />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
