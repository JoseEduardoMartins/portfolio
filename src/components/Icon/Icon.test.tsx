import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Icon from "./Icon";

describe("Icon", () => {
  it("renders an svg for a known icon name", () => {
    const { container } = render(<Icon>github</Icon>);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies the size class to the rendered icon", () => {
    const { container } = render(<Icon size="small">github</Icon>);
    expect(container.querySelector("svg")).toHaveClass("w-5", "h-5");
  });

  it("renders nothing for an unknown icon name", () => {
    const { container } = render(<Icon>unknown-icon</Icon>);
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("renders nothing when children is not a string", () => {
    const { container } = render(
      <Icon>
        <span>not-an-icon</span>
      </Icon>
    );
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });
});
