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
});
