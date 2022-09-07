import axios from "axios"

const baseUrl = "http://localhost:4000/"

const axiosClient =  axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeout: 2000
})

const axiosPrivate = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeout: 2000,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosPrivate.interceptors.response.use(res => {
    return res
}, async (error) => {
    const configOrigin = error.config
    if (configOrigin.url !== "/user/login" && configOrigin.url !== "/user/register" && error.response) {
        // not register or login and error 500, retry token refresh
        if (error.response.status === 500 && !configOrigin._retry) {
            configOrigin._retry = true
        try {
            const {token} = await (await axiosPrivate.post("user/refresh")).data
            console.log(token);
            return axiosPrivate(configOrigin)
            
        } catch (err) {
            return Promise.reject(err)
        }
    }
    }
})

export { axiosClient, axiosPrivate }