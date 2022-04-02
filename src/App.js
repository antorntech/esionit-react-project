import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ItService from "./components/ItService/ItService";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <ItService></ItService>
    </div>
  );
}

export default App;
