import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"https://react-burger-845c2-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default axiosInstance;