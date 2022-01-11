import axios from "axios";

const BASE_URL = "https://localhost:44349/api/"

export const ENDPOINTS = {
    REGISTER: "account/register",
    LOGIN: "account/login",
    CLIENT: "Client/",
    USER: "user/",
    DEAL: "deal/",
    PRODUCT: "product/",
    COMPANY: "Company/" 
}

export const CreateAPIEndPoint = endpoint => {
    let url = BASE_URL + endpoint;
    console.log(url);
    return{
        fetchAll: () => axios.get(url),
        fetchById: Id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id)
    }
}