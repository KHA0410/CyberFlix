import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DettailPage from "./Pages/DetailPage/DettailPage";
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
      </BrowserRouter>
    </div>
  );
}

export default App;
