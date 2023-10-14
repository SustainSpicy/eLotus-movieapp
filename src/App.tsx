import "./App.scss";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
      {/* <div className="home-page">
        <div className="div">
          <div className="overlap"></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
