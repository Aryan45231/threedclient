import {AppUrl} from "../res/AppUrl"
import {ApiServices} from "../Network/Api/index"
export class UserRepository {
    constructor(){
        this.url = new AppUrl()
        this.ApiServices = new ApiServices()
    }
    searchUser = async(payload)=>{
        try{
            return await this.ApiServices.getPostRequest(`${this.url.userUrl}/searchuser`, payload)
        }catch(err){
            console.log(err)
            throw err
        }
    }
    searchHashTag  = async(payload)=>{
        try{
            return await this.ApiServices.getPostRequest(`${this.url.userUrl}/searchhashtag`, payload)
        }catch(err){
            throw err
        }
    }
    getUserProfile = async()=>{
        try{
            return await this.ApiServices.getGetRiquest(`${this.url.userUrl}/getuserprofile`)
        }catch(err){
            console.log(err)
        }
    }
}
