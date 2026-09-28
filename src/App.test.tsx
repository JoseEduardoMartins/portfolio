import { render, screen } from "@testing-library/react";
import App from "./App";
import "./i18n";

test("renders the site header navigation", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});
