import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./comonents/Header/header.jsx";
import MainPage from "./pages/main/mainPage.jsx";

import SignUpForm from "./pages/registry/SignUpForm.jsx";
import ClientPage from "./pages/clientPage/pationSelectDoctors.jsx";
import Footer from "./comonents/footer/footer.jsx";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/clientPage" element={<ClientPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
