import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "../../constants/projectData";

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(
      <MemoryRouter>
        <ProjectCard projectIndex={0} />
      </MemoryRouter>,
    );
    expect(screen.getByText(projects[0].projectTitle)).toBeInTheDocument();
  });

  it("renders the project image", () => {
    render(
      <MemoryRouter>
        <ProjectCard projectIndex={0} />
      </MemoryRouter>,
    );
    const img = screen.getByAltText(projects[0].projectTitle);
    expect(img).toBeInTheDocument();
  });

  it("links to the /project route", () => {
    render(
      <MemoryRouter>
        <ProjectCard projectIndex={2} />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/project");
  });

  it("renders SkillBox components for project technologies", () => {
    render(
      <MemoryRouter>
        <ProjectCard projectIndex={0} />
      </MemoryRouter>,
    );
    // Project 0 is "Star Wars game" with technologies ["Java", "JavaFX"]
    expect(screen.getByText("Java")).toBeInTheDocument();
    expect(screen.getByText("JavaFX")).toBeInTheDocument();
  });
});
