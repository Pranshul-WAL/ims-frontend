import axiosInstance from './';

export const listOrder = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/order/listall',
    })
}