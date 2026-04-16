import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

vi.mock("../../components/particles/MyParticles", () => ({
  default: () => <div data-testid="particles-mock" />,
}));

describe("Home", () => {
  it("renders the heading text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Krystian");
    expect(heading).toHaveTextContent("software engineer");
  });

  it("renders the Play Tetris button with link to /tetris", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const link = screen.getByText(/Play Tetris/).closest("a");
    expect(link).toHaveAttribute("href", "/tetris");
  });

  it("renders the Download CV button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Download my CV/)).toBeInTheDocument();
  });

  it("renders the profile image", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByAltText("Krystian meditating")).toBeInTheDocument();
  });
});
