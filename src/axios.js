import axios from "axios"

const instance = axios.create({
    baseURL: 'https://wrtinder-backend.herokuapp.com'
})

export default instance;