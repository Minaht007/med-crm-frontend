import "./App.css";
import MainPage from "./pages/main/mainPage.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpForm from "./pages/registry/SignUpForm.jsx";
import ClientPage from "./pages/clientPage/pationSelectDoctors.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/clientPage" element={<ClientPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
