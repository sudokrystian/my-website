import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Game from "./pages/games/froggers-game/FroggersGame";
import Project from "./pages/project/Project";
import Tetris from "./pages/games/tetris/Tetris";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tetris" element={<Tetris />} />
      <Route path="/game" element={<Game />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterConfig;
