import axios from 'axios'

const axiosInstance = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: 'http://localhost:8001/api/',
        headers: {
            'Content-Type':'application/json',
             'Authorization': `Bearer ${token}`
            //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTU1MjI3NjI4Mn0.PaCKWdWzcdzb8k8ysn6nVfHIrnYfTuuHGPpZAlD7EhE'
        }
    })
}

export default axiosInstance