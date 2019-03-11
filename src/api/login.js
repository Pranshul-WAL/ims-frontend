import axiosInstance from './'

export const login=(username,password)=>{
    const axios=axiosInstance();
    return axios({
        method:'POST',
        url:'/auth/login',
        data:{
            userName:username,
            password:password
        }
    })
}
