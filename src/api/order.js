import axiosInstance from './'

export const createOrder=()=>{
    const axios=axiosInstance();
    return axios({
        method:'post',
        url:'/order/add',
        data:{
            productId:this.props.productId,
            productName:this.props.productName,
            Quantity:this.props.Quantity
        }
    })
}
 