import axios from "axios";

const baseUrl = "http://localhost:3001";

export function listProjects() {
   const response = axios.get(`${baseUrl}/list`); 
   return response;
}