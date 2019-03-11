import axiosInstance from './';

export const listReturn = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/returns/list',
    })
}

