import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import WorkCard from "./WorkCard";
import works from "../../data/works";
import "../../i18n";

const [infinider] = works;

describe("WorkCard", () => {
  it("renders the work name and links to its case study", () => {
    render(
      <MemoryRouter>
        <WorkCard work={infinider} />
      </MemoryRouter>
    );

    expect(screen.getByText("Infinider")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/work/infinider"
    );
  });

  it("renders the stack chips", () => {
    render(
      <MemoryRouter>
        <WorkCard work={infinider} />
      </MemoryRouter>
    );

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("NestJS")).toBeInTheDocument();
  });
});
