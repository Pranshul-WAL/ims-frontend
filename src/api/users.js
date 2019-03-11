import axiosInstance from './'

export const listUser = (role) => {
    const axios = axiosInstance();
    return axios({
        method: 'GET',
        url: '/user/admin/enduser/list/Admin',
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

export const update=(username,password,role)=>{
    const axios=axiosInstance();
    return axios({
        method:'PUT',
        url:'/user/admin/enduser/update',
        data:{
            username:username,
            password:password,
            role:role
        }
    })
}

export const deleteUser=(id)=>{
    const axios=axiosInstance();
    return axios({
        method:'DELETE',
        url:`/user/admin/enduser/delete/${id}`,
        
    })
}