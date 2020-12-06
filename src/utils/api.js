import { create } from 'apisauce';

const api = create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{Accept:'application/json'}
})

export default api;