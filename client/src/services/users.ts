import axios from "axios";
import type { FilterType } from "../types";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

export const fetchUsers = async (filters: FilterType) => {
  const response = await instance.get("/api/users-with-pet", {
    params: filters,
  });

  return response.data ?? [];
};
