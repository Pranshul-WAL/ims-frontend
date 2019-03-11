import axiosInstance from './';

export const listOrders = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/order/listall',
    })
}