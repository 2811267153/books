import axios from 'axios';

export function request(config){
    const instance = axios.create({
        baseURL: 'http://novel.kele8.cn',
        timeout: 15000,
    })

    return instance(config);
}

