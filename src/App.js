import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Form/Login/Login";
import SignUp from "./Pages/Form/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
