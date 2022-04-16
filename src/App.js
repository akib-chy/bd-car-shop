import "./App.css";
import AllCars from "./Pages/Home/AllCars/AllCars";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AllCars />
      <Footer />
    </div>
  );
}

export default App;
