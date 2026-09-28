import { github } from "../../../config/config";
import http from "../../../config/http/github";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
  topics?: string[];
}

const getAll = async (): Promise<Repository[]> => {
  const response = await http.get<Repository[]>(`/users/${github.name}/repos`);
  return response.data;
};

export { getAll };
