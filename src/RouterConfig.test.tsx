import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RouterConfig from "./RouterConfig";

// Mock all page components to isolate routing logic
vi.mock("./pages/home/Home", () => ({
  default: () => <div>Home Page</div>,
}));
vi.mock("./pages/about/About", () => ({
  default: () => <div>About Page</div>,
}));
vi.mock("./pages/experience/Experience", () => ({
  default: () => <div>Experience Page</div>,
}));
vi.mock("./pages/portfolio/Portfolio", () => ({
  default: () => <div>Portfolio Page</div>,
}));
vi.mock("./pages/contact/Contact", () => ({
  default: () => <div>Contact Page</div>,
}));
vi.mock("./pages/books/books", () => ({
  default: () => <div>Books Page</div>,
}));
vi.mock("./pages/games/tetris/Tetris", () => ({
  default: () => <div>Tetris Page</div>,
}));
vi.mock("./pages/games/games", () => ({
  default: () => <div>Games Page</div>,
}));
vi.mock("./pages/games/froggers-game/FroggersGame", () => ({
  default: () => <div>Froggers Page</div>,
}));
vi.mock("./pages/project/Project", () => ({
  default: () => <div>Project Page</div>,
}));
vi.mock("./pages/error/Error", () => ({
  default: () => <div>Error Page</div>,
}));

const renderRoute = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <RouterConfig />
    </MemoryRouter>,
  );

describe("RouterConfig", () => {
  it("renders Home on /", () => {
    renderRoute("/");
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("renders About on /about", () => {
    renderRoute("/about");
    expect(screen.getByText("About Page")).toBeInTheDocument();
  });

  it("renders Experience on /experience", () => {
    renderRoute("/experience");
    expect(screen.getByText("Experience Page")).toBeInTheDocument();
  });

  it("renders Portfolio on /portfolio", () => {
    renderRoute("/portfolio");
    expect(screen.getByText("Portfolio Page")).toBeInTheDocument();
  });

  it("renders Contact on /contact", () => {
    renderRoute("/contact");
    expect(screen.getByText("Contact Page")).toBeInTheDocument();
  });

  it("renders Books on /books", () => {
    renderRoute("/books");
    expect(screen.getByText("Books Page")).toBeInTheDocument();
  });

  it("renders Tetris on /tetris", () => {
    renderRoute("/tetris");
    expect(screen.getByText("Tetris Page")).toBeInTheDocument();
  });

  it("renders Games on /games", () => {
    renderRoute("/games");
    expect(screen.getByText("Games Page")).toBeInTheDocument();
  });

  it("renders Error on unknown route", () => {
    renderRoute("/some-nonexistent-path");
    expect(screen.getByText("Error Page")).toBeInTheDocument();
  });
});
