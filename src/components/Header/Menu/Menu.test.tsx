import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Menu from "./Menu";
import "../../../i18n";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Menu />
    </MemoryRouter>
  );

describe("Menu", () => {
  it("renders the four primary nav links", () => {
    renderAt("/");
    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));
    expect(hrefs).toEqual(["/", "/journey", "/work", "/contact"]);
  });

  it("marks the current route as active", () => {
    renderAt("/work");
    const active = screen
      .getAllByRole("link")
      .find((link) => link.getAttribute("href") === "/work");
    expect(active).toHaveAttribute("aria-current", "page");
  });

  it("keeps the work link active on a nested case-study route", () => {
    renderAt("/work/infinider");
    const active = screen
      .getAllByRole("link")
      .find((link) => link.getAttribute("href") === "/work");
    expect(active).toHaveAttribute("aria-current", "page");
  });
});
