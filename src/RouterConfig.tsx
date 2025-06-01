import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";
import Error from "./pages/error/error";
import Game from "./pages/game/game";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/game" element={<Game />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterConfig;
