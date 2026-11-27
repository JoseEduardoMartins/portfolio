import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import Infinider from "./pages/Work/Infinider";
import Chavetta from "./pages/Work/Chavetta";
import TeamManager from "./pages/Work/TeamManager";
import Kesia from "./pages/Work/Kesia";
import Contact from "./pages/Contact";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/infinider" element={<Infinider />} />
        <Route path="/work/chavetta" element={<Chavetta />} />
        <Route path="/work/team-manager" element={<TeamManager />} />
        <Route path="/work/kesia" element={<Kesia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
