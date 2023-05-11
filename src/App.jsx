import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Portofolio from "./pages/Portofolio";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Portofolio" element={<Portofolio />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
