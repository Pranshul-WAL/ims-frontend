import axiosInstance from './'

export const newOrder=(products)=>{
    const axios=axiosInstance();
    return axios({
        method:'POST',
        url:'/order/add',
        data:{
           products
        }
    })
}
 