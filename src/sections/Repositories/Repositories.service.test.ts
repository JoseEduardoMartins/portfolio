import { beforeEach, describe, expect, it, vi } from "vitest";
import http from "../../config/http/github";
import { github } from "../../config/config";
import { getAll, type Repository } from "./Repositories.service";

vi.mock("../../config/http/github", () => ({
  default: { get: vi.fn() },
}));

const mockedGet = vi.mocked(http.get);

describe("Repositories.service getAll", () => {
  beforeEach(() => {
    mockedGet.mockReset();
  });

  it("requests the configured user's repos and returns the data", async () => {
    const repos = [{ id: 1, name: "portfolio" }] as Repository[];
    mockedGet.mockResolvedValue({ data: repos });

    const result = await getAll();

    expect(mockedGet).toHaveBeenCalledWith(`/users/${github.name}/repos`);
    expect(result).toEqual(repos);
  });

  it("propagates request errors", async () => {
    mockedGet.mockRejectedValue(new Error("network down"));

    await expect(getAll()).rejects.toThrow("network down");
  });
});
