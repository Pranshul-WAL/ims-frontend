import axiosInstance from './';

export const listInventory = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/inventory/list',
    })
}