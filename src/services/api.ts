import axios from "axios";

const api = axios.create({
  baseURL: "https://matanbotbackend.herokuapp.com//"
})

export default api;