import axiosInstance from './';

export const listReturn = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/returns/list',
    })
}

export const addReturn = (returns) => {
    const axios = axiosInstance();
    return axios({
        method: 'POST',
        url: '/returns/createReturn',
        data:{
            userId:localStorage.getItem('userId'),
            orders:returns
        }
    })
}

