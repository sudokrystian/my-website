import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import Game from "./pages/games/froggers-game/FroggersGame";
import Project from "./pages/project/project";

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
