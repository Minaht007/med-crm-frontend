import "./App.css";
import Header from "./pages/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />;
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
