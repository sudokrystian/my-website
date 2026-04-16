import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

vi.mock("../../assets/x.svg?react", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="close-icon" {...props} />
  ),
}));
vi.mock("../../assets/menu.svg?react", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="menu-icon" {...props} />
  ),
}));
vi.mock("../../assets/logo/SK_LOGO-02.svg", () => ({
  default: "logo.svg",
}));

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe("Header", () => {
  it("renders all navigation links", () => {
    renderHeader();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work experience")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("My book")).toBeInTheDocument();
    expect(screen.getByText("My game")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    renderHeader();
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("toggles mobile menu on click", async () => {
    const user = userEvent.setup();
    renderHeader();
    const navOptions = document.querySelector(".nav-options");
    expect(navOptions).not.toHaveClass("active");

    const menuToggle = screen.getByLabelText("Open menu");
    await user.click(menuToggle);
    expect(document.querySelector(".nav-options")).toHaveClass("active");
    expect(menuToggle).toHaveAttribute("aria-expanded", "true");
  });
});
