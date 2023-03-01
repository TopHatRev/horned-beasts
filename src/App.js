import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import HornedBeast from "./Components/HornedBeast";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <HornedBeast />
      <HornedBeast />
      <Footer />
    </div>
  );
}

export default App;
