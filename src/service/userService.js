import API from "./api";


export const login = (data) => API.post('/login', data);
export const register = (data) =>API.post('/createEmploy', data)
export const EmployeList = () => API.get('/employ', {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

})

export const Delete = (idEmploy) => API.delete(`/deleteEmploy/${idEmploy}`, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

})
export const employProfile = () => API.get(`/profile`, {

    headers: {

        Authorization: `${localStorage.getItem('token')}`

    }

})