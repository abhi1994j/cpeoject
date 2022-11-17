import axios from "axios";

const url='http://127.0.0.1:3005';

export const getApiData=async(link)=>{
    return await axios.get(`${url}/${link}`)
}

export const postApiData=async(link,data)=>{
    await axios.post(`${url}/${link}`,data)
}