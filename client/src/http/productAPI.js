import {$authHost, $host} from './index';

export const createGenre = async (name) => {
    console.log(name);
    console.log(JSON.stringify(name));
    const {data} = await $authHost.post('/api/genre', name);
    return data;
}
export const fetchGenre = async () => {
    const {data} = await $host.get('/api/genre', );
    return data;
}

export const createDeveloper = async (name) => {
    const {data} = await $authHost.post('/api/developer', name);
    return data;
}
export const fetchDeveloper = async () => {
    const {data} = await $host.get('/api/developer', );
    return data;
}

export const createProduct = async (name) => {
    const {data} = await $authHost.post('/api/product', name);
    return data;
}
export const fetchProduct = async () => {
    const {data} = await $host.get('/api/product', );
    return data;
}
