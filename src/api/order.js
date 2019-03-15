import axiosInstance from './'

export const newOrder=(productName,productId,Quantity)=>{
    const axios=axiosInstance();
    return axios({
        method:'POST',
        url:'/order/create',
        data:{
            productId:productId,
            productName:productName,
            orderQuantity:Quantity
        }
    })
}
 