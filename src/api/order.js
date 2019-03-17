import axiosInstance from './'

export const newOrder=(productName,Quantity)=>{
    const axios=axiosInstance();
    return axios({
        method:'POST',
        url:'/order/add',
        data:{
            productName:productName,
            orderQuantity:Quantity
        }
    })
}
 