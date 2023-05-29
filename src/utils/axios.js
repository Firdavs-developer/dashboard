import axios from "axios";
import { useAuthToken } from "../context/context";
const tkn = localStorage.getItem("token") 

export const instance = axios.create({
    baseURL: 'http://3.138.204.20/',
    timeout: 10000,
    headers: {Authorization: `Bearer ${tkn}`}
});
 



 