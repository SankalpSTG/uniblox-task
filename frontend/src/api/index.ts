import axios, { type AxiosResponse } from "axios";
import { RequestMethods, type RequestType, type ResponseType } from "./types";
import toast from "react-hot-toast";

const API = {
  get: async <T=any>(data: RequestType) => {
    return await API.request<T>(RequestMethods.get, data.url, data.query)
  },
  post: async <T=any>(data: RequestType) => {
    return await API.request<T>(RequestMethods.post, data.url, data.body)
  },
  request:async <T=any>(method: string, url: string, data: any): Promise<AxiosResponse<ResponseType<T>, any>> => {
    try{
      if(method === RequestMethods.post){
        return await axios.post<ResponseType<T>>(url, data)
      }else{
        return await axios.get<ResponseType<T>>(url, {
          params: data
        })
      }
    }catch(error){
      if(axios.isAxiosError(error)){
        const message: string = error.response?.data.message || ""
        if(message.length > 0) toast.error(message)
      }
      throw error
    }
  }
}

export default API