import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Flag from "./Flag";

describe("Flag", () => {
  it("renders an image with the given source", () => {
    render(<Flag image="brasil.svg" isSelected={false} />);

    const img = screen.getByRole("img", { name: "flag" });
    expect(img).toHaveAttribute("src", "brasil.svg");
  });

  it("removes the grayscale filter when selected", () => {
    render(<Flag image="brasil.svg" isSelected />);

    expect(screen.getByRole("img", { name: "flag" })).toHaveClass("grayscale-0");
  });

  it("applies the grayscale filter when not selected", () => {
    render(<Flag image="brasil.svg" isSelected={false} />);

    expect(screen.getByRole("img", { name: "flag" })).toHaveClass("grayscale");
  });

  it("forwards click handlers", async () => {
    const onClick = vi.fn();
    render(<Flag image="brasil.svg" isSelected={false} onClick={onClick} />);

    await userEvent.click(screen.getByRole("img", { name: "flag" }));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
