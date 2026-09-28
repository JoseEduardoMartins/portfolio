import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionHeader from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders the eyebrow and the title", () => {
    render(<SectionHeader eyebrow="Sobre" title="Quem sou eu" />);

    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Quem sou eu" })
    ).toBeInTheDocument();
  });

  it("renders the index when provided", () => {
    render(<SectionHeader index="01" eyebrow="Sobre" title="Quem sou eu" />);

    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("omits the index when not provided", () => {
    render(<SectionHeader eyebrow="Sobre" title="Quem sou eu" />);

    expect(screen.queryByText("01")).not.toBeInTheDocument();
  });
});
