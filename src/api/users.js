import axiosInstance from './'

export const listUser = (role) => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/user/admin/enduser/listAll',
    })
}

export const createNew=(username,password,role)=>{
    const axios=axiosInstance();
    return axios({
        method:'POST',
        url:'/user/admin/enduser/add',
        data:{
            userName:username,
            password:password,
            role:role
        }
    })
}

export const update=(username,password,role, userId)=>{
    const axios=axiosInstance();
    return axios({
        method:'PUT',
        url:`/user/admin/enduser/updateUser/${userId}`,
        data:{
            userName:username,
            password:password,
            role:role,
            //userId
        }
    })
}

export const deleteUser=(userId)=>{
    const axios=axiosInstance();
    return axios({
        method:'DELETE',
        url:`/user/admin/enduser/deleteUser/${userId}`,
        
    })
}