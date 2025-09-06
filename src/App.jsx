import "./App.css";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import bg from "./assets/bg.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <div
      className="bg-center bg-cover h-full w-full fixed"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="">
        <Router>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
