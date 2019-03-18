import axiosInstance from './';

export const fetchOrders = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/order/listall',
    })
}

export const listOrders = () => {
    const axios = axiosInstance();
    return axios({
        method:'GET',
        url: '/order/orders',
    });
}

export const listOrderItems = (id) => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: `/order/listItems/${id}`,
    });
}