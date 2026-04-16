import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Experience = lazy(() => import("./pages/experience/Experience"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Books = lazy(() => import("./pages/books/Books"));
const Tetris = lazy(() => import("./pages/games/tetris/Tetris"));
const Games = lazy(() => import("./pages/games/Games"));
const FroggersGame = lazy(
  () => import("./pages/games/froggers-game/FroggersGame"),
);
const Project = lazy(() => import("./pages/project/Project"));
const Error = lazy(() => import("./pages/error/Error"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tetris" element={<Tetris />} />
        <Route path="/games" element={<Games />} />
        <Route path="/froggers" element={<FroggersGame />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
