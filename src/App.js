import "./App.css";
import Header from "./pages/index";
import SignUpForm from "./pages/registry/SignUpForm.jsx";
import PationSelectDoctors from "./pages/clientPage/pationSelectDoctors.jsx";

function App() {
  return (
    <>
      <Header />
      <SignUpForm />
      <PationSelectDoctors />
    </>
  );
}

export default App;
