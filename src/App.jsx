import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import projects from "./projects";

function App() {
  const [scrollData, setScrollData] = useState({ currentY: 0, previousY: 0 });
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((previousData) => {
        return { previousY: previousData.currentY, currentY: window.scrollY };
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.currentY < 200) {
      setShowNav(true);
      return;
    }

    if (scrollData.currentY < scrollData.previousY) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [scrollData]);

  return (
    <>
      <nav className={showNav ? "container sticky" : "container sticky hidden"}>
        <div className="navbar">
          <h1 className="inter-normal">Steffen Sasse</h1>
        </div>
        <hr className="max-80-percent" />
        <div className="navbar">
          <Link to="/about">
            <h3 className="inter-normal">about</h3>
          </Link>
          <Link to="/">
            <h3 className="inter-normal">selected work</h3>
          </Link>
          <Link to="/contact">
            <h3 className="inter-normal">contact</h3>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
