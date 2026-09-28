import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => (
  <div className="w-full min-h-screen overflow-x-hidden text-text">
    <Header />
    <Sidebar />
    <Home />
    <Footer />
  </div>
);

export default App;
