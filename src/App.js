import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import HeaderFlix from "./components/HeaderFlix/HeaderFlix";
import DettailPage from "./Pages/DetailPage/DettailPage";
import FooterFlix from "./components/FooterFlix/FooterFlix";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* OutLet */}
        <Routes>
          <Route to="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/detail/:maPhim" element={<DettailPage />} />
          </Route>
        </Routes>
        <FooterFlix />
      </BrowserRouter>
    </div>
  );
}

export default App;
