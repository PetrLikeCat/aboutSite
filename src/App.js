import { Header } from "./components/Header";
import ".//scss/App.scss";
import { Technologies } from "./components/Technologies";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
