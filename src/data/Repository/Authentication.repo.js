import {AppUrl} from "../res/AppUrl"
import {ApiServices} from "../Network/Api/index"
export class AuthenticationRepository {
    constructor(){
        this.url = new AppUrl()
        this.ApiServices = new ApiServices()
    }
     signup =  async(payload)=>{
        try{
            return  await this.ApiServices.getPostRequest(`${this.url.baseUrl}/signup`, payload)
        }catch(error){
            throw error;
        }
    }
    signin = async(payload)=>{
        try{
            return  await this.ApiServices.getPostRequest(`${this.url.baseUrl}/signin`, payload)
        }catch(error){
            throw error;
        }
    }
}