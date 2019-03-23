import axiosInstance from './'

export const listProducts = () => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/user/admin/product/list',
    })
}

export const createProduct = (productName, userId, salePrice, productDescription, Quantity) => {
    const axios = axiosInstance();
    return axios({
        method: 'POST',
        url: '/user/admin/product/add',
        data: {
            productName: productName,
            userId: userId,
            salePrice: salePrice,
            productDescription: productDescription,
            Quantity: Quantity
        }
    })
}


export const updateProduct = (productName, salePrice, productDescription, Quantity, productId, userId) => {
    const axios = axiosInstance();
    return axios({
        method: 'PUT',
        url: `/user/admin/product/update/${productId}`,
        data: {
            productName: productName,
            salePrice: salePrice,
            productDescription: productDescription,
            Quantity: Quantity,
            userId:userId
        }
    })
}

export const deleteProduct = (productId) => {
    const axios = axiosInstance();
    return axios({
        method: 'DELETE',
        url: `/user/admin/product/delete/${productId}`,
        // data:{
        //     productName:productName,
        //     salePrice:salePrice,
        //     productDescription:productDescription,
        //     Quantity:Quantity
        // }
    })
}

//make response.data static