import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://better-tomorrow-server.vercel.app'
})

const useAxios = () => {
    return axiosInstance
}

export default useAxios