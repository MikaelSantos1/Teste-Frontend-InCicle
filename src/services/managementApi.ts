import axios from "axios";

export const apiManagement= axios.create({
    baseURL:'./management.json'
})