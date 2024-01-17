import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DettailPage from "./Pages/DetailPage/DettailPage";
import Layout from "./Layout/Layout";
import Spinner from "./components/Spinner/Spinner";
import RegisterPage from "./Pages/Register/RegisterPage";
import { FloatButton } from "antd";

function App() {
  return (
    <>
      <Spinner />
      <BrowserRouter>
        {/* OutLet */}
        <Routes>
          <Route to="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/detail/:maPhim" element={<DettailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FloatButton.BackTop />
    </>
  );
}

export default App;
