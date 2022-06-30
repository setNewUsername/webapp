import {$authHost, $host} from './index';
import jwtDecode from "jwt-decode";

export const registration = async (email,password) => {
    const response = await $host.post('/api/user/registration', {email, password, access_rights: 'ADMIN'});
    return jwtDecode(response.data);
}
export const login = async (email,password) => {
    const {data} = await $host.post('/api/user/login', {email, password});
    return jwtDecode(data.token);
}
export const check = async () => {
    const response = await $host.post('/api/user/registration', );
    return response;
}