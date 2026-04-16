import { render, screen } from "@testing-library/react";
import Error from "./Error";

describe("Error", () => {
  it("renders the error message", () => {
    render(<Error />);
    expect(
      screen.getByText("Error, website doesn't exist"),
    ).toBeInTheDocument();
  });

  it("renders as an h1 element", () => {
    render(<Error />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Error, website doesn't exist");
  });
});
