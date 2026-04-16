import { render, screen } from "@testing-library/react";
import SkillBox from "./SkillBox";
import { FaReact } from "react-icons/fa";

describe("SkillBox", () => {
  it("renders the text label", () => {
    render(<SkillBox icon={FaReact} text="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies custom background color when color prop is provided", () => {
    const { container } = render(
      <SkillBox icon={FaReact} text="React" color="#e6f0fa" />,
    );
    const box = container.querySelector(".skillbox");
    expect(box).toHaveStyle({ background: "#e6f0fa" });
  });

  it("does not set inline style when color prop is omitted", () => {
    const { container } = render(<SkillBox icon={FaReact} text="React" />);
    const box = container.querySelector(".skillbox");
    expect(box).not.toHaveAttribute("style");
  });

  it("is focusable (has tabIndex)", () => {
    const { container } = render(<SkillBox icon={FaReact} text="React" />);
    const box = container.querySelector(".skillbox");
    expect(box).toHaveAttribute("tabindex", "0");
  });
});
