import axios from 'axios'

const ACCESS_TOKEN = 'Authorization'
const REFRESH_TOKEN = 'RefreshToken'
const token = localStorage.getItem(ACCESS_TOKEN)  

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: `Bearer ${JSON.parse(token)}`,
  }
})

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;