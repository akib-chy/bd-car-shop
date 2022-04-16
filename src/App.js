import "./App.css";
import AllCars from "./Pages/Home/AllCars/AllCars";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AllCars />
    </div>
  );
}

export default App;
