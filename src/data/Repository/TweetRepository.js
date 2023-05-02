import {AppUrl} from "../res/AppUrl"
import {ApiServices} from "../Network/Api/index"
export class TweetRepository {
    constructor(){
        this.url = new AppUrl()
        this.ApiServices = new ApiServices()
    }
    newTweet =  async(payload)=>{
        try{
            return await this.ApiServices.getPostRequest(`${this.url.userUrl}/newtweet`, payload)
        }catch(err){
            throw err
        }
    }
    getTweet = async()=>{
        try{
            return await this.ApiServices.getGetRiquest(`${this.url.userUrl}/getTweet   `)
        }catch(err){
            throw err
        }
    }
}