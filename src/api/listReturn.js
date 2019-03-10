import axiosInstance from '.';

export const createReturn = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/returns/list',
    })
}

