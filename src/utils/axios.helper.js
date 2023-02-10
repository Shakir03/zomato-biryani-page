import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})


// complete url - https://www.zomato.com/webroutes/getPage?page_url=/bangalore/restaurants?place_name=Bengaluru&dishv2_id=30308&location=&isMobile=0