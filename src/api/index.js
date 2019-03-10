import axios from 'axios'

const axiosInstance = () => {
    return axios.create({
        baseURL: 'http://localhost:8001/api/',
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiaWQiOjEsImlhdCI6MTU1MjI0MjUyMn0.RWQK9Y7YwPjoVt72t_HEZpFY-H29KfL_IskArpFnzJU',
        }
    })
}

export default axiosInstance