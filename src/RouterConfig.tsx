import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

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

const GameErrorFallback = (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h2>The game crashed.</h2>
    <p>Try refreshing the page to play again.</p>
  </div>
);

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
        <Route
          path="/tetris"
          element={
            <ErrorBoundary fallback={GameErrorFallback}>
              <Tetris />
            </ErrorBoundary>
          }
        />
        <Route path="/games" element={<Games />} />
        <Route
          path="/froggers"
          element={
            <ErrorBoundary fallback={GameErrorFallback}>
              <FroggersGame />
            </ErrorBoundary>
          }
        />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
