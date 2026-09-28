import { describe, expect, it } from "vitest";
import { durationInYearsMonths, formatMonthYear } from "./date";

describe("formatMonthYear", () => {
  it("returns null when the iso date is null", () => {
    expect(formatMonthYear(null, "pt-BR")).toBeNull();
  });

  it("formats an en-US date capitalized", () => {
    expect(formatMonthYear("2024-08", "en-US")).toBe("Aug 2024");
  });

  it("capitalizes the first letter for pt-BR", () => {
    const label = formatMonthYear("2024-08", "pt-BR");
    expect(label).not.toBeNull();
    expect(label![0]).toBe(label![0].toUpperCase());
    expect(label).toContain("2024");
  });

  it("falls back to pt-BR for an unknown language", () => {
    expect(formatMonthYear("2024-08", "fr")).toBe(
      formatMonthYear("2024-08", "pt-BR")
    );
  });
});

describe("durationInYearsMonths", () => {
  const labels = {
    year: "ano",
    years: "anos",
    month: "mês",
    months: "meses",
  };

  it("computes a multi-year, multi-month duration inclusively", () => {
    // Jan 2020 -> Feb 2022 = 26 months = 2 anos 2 meses
    expect(durationInYearsMonths("2020-01", "2022-02", labels)).toBe(
      "2 anos 2 meses"
    );
  });

  it("uses singular labels for exactly one year", () => {
    // Jan 2020 -> Dec 2020 = 12 months = 1 ano
    expect(durationInYearsMonths("2020-01", "2020-12", labels)).toBe("1 ano");
  });

  it("returns at least one month for the same start and end", () => {
    expect(durationInYearsMonths("2020-01", "2020-01", labels)).toBe("1 mês");
  });
});
