import axios from "axios";
import {IUser} from "../types/types";

export const getUsers = async () => {
    try {
        const response = await axios.get<IUser[], any>("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (e) {
        alert(e);
    }
}