import {$authHost, $host} from './index';

export const createGenre = async (name) => {
    const {data} = await $authHost.post('/api/genre', name);
    return data;
}
export const fetchGenre = async () => {
    const {data} = await $host.get('/api/genre',);
    return data;
}

export const createDeveloper = async (name) => {
    const {data} = await $authHost.post('/api/developer', name);
    return data;
}
export const fetchDeveloper = async () => {
    const {data} = await $host.get('/api/developer',);
    return data;
}

// "name": "Counter Strice 1.6"
// "multiplayer": false
// "price": 1942
// "amount": 40
// "youtube": "youtube_Counter Strice 1.6"
// "image": image from pc
// "productGenreId": 28
// "productDeveloperId": 30
// "productPublisherId": 7
// "languages": [{"id": 1}, {"id":2}]
// "systemRequrements": [
//     {"id": 1, "min": "rx560", "rec": "rx580", "name": "gpu"},
//     {"id": 2, "min": "i3-10100f", "rec": "i5-10400f", "name": "cpu"},
//     {"id": 3, "min": "7", "rec": "10", "name": "windows"},
//     {"id": 4, "min": "30", "rec": "50", "name": "disk_space"},
//     {"id": 5, "min": "4", "rec": "8", "name": "ram"}]
export const createProduct = async (formData) => {
    console.log(formData)
    const {data} = await $authHost.post('/api/product', formData);
    console.log(data)
    return data;
}

export const fetchProduct = async () => {
    const {data} = await $host.get('/api/product',);
    return data;
}

export const fetchProductOne = async (id) => {
    const {data} = await $host.get(`/api/product/${id}`);
    console.log(data)
    return data;
}
