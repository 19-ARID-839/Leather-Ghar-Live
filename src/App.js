import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topbar from "./components/Topbar";
import SmallScreen from "./components/SmallScreen";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <Topbar />
      <SmallScreen />
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route excat path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route excat path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route excat path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
