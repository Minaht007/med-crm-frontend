import "./App.css";
import MainPage from "./pages/main/mainPage.jsx";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./pages/registry/SignUpForm.jsx";
import ClientPage from "./pages/clientPage/clientPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" component={MainPage} />
        <Route path="/SignUpForm" component={SignUpForm} />
        <Route path="/clientPage" component={ClientPage} />
      </Routes>
    </>
  );
}

export default App;
