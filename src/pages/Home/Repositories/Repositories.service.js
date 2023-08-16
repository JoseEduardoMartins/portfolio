import { github } from "../../../config/config";
import http from "../../../config/http/github";

const getAll = async () => {
    try {
        const response = await http.get(`/users/${github.name}/repos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { getAll };