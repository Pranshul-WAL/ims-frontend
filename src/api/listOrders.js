import axiosInstance from './';

export const fetchOrders = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/order/listall',
    })
}