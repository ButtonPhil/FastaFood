import axios from "axios";


const API = axios.create({

    baseURL: 'http://localhost:3000/fastafood'

})

export default API;