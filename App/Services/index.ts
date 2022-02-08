import axios from 'axios';

import apiConstants from "../Utils/ApiConstants";

const axiosInstance=axios.create({
    baseURL: apiConstants.baseUrl
})

export default axiosInstance