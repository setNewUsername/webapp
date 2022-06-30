import {$authHost, $host} from './index';

//Характеристики


export const fetchSpecName = async () => {
    // const {data} = await $host.get('/api/genre', );
    const data = [
        {
            id: 1,
            name: 'CPU'
        },
        {
            id: 2,
            name: 'GPU'
        },
        {
            id: 3,
            name: 'OS'
        },
        {
            id: 4,
            name: 'Disk Space'
        },
        {
            id: 5,
            name: 'RAM'
        },
    ]
    return data;
}