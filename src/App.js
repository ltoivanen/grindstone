import Etusivu from "./pages/etusivu";
import Meista from "./pages/meista";
import Palvelut from "./pages/palvelut";
import Navigation from "./components/navigation"
import Tuotteet from './pages/tuotteet';
import Footer from './components/footer';
import "./styles/grindstone.css";


function App() {
  return (
    <div>
      <Navigation />
      <Etusivu />
      <Meista />
      <Palvelut />
      <Tuotteet />
      <Footer />
    </div>
  );
}



export default App;