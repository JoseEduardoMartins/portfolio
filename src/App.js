import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./styles";

const App = () => (
  <div className="app">
    <Header />
    <Sidebar />
    <Home />
    <Footer />
  </div >
);

export default App;
