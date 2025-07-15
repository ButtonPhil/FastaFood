import API from "./api";


export const login = (data) => API.post('/HomePage', data);