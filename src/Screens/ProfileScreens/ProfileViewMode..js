import { useEffect, useState } from "react"
import { UserRepository } from "../../data/Repository/UserRepository"

const useProfileViewModel = () => {
    const userRepository = new UserRepository()
    const [userData, setUserData] = useState({name:"", email:"",tweets:[]})
    const getUserProfileData = async () => {
        const data = await userRepository.getUserProfile()
         setUserData({ name :data.name , email:data.email , tweets: data.tweets})
    }
    useEffect(()=>{
       getUserProfileData()
    },[])
    return {
        userData
    }
}
export default useProfileViewModel