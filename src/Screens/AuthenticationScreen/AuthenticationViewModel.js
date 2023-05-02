import { useEffect, useState, useContext } from "react"
import { AuthenticationRepository } from "../../data/Repository/Authentication.repo"
import { useNavigate } from "react-router-dom"
import { AccountContext } from "../../Context"
const useAuthViewModel = () => {
    const authrepo = new AuthenticationRepository()
    const navigate = useNavigate()
    const { setAccountToken } = useContext(AccountContext)
    // Authentication States
    const [fillpassword, setfillPassword] = useState(false)
    const [signupdata, setSignUpData] = useState({ Name: "", Email: "", Password: "" })
    const [signindata, setSigninData] = useState({ Email: "", Password: "" })
    // Authentication Methodes
    const verifyEmail = () => setfillPassword(true)
    const getSignupdata = (event) => setSignUpData({ ...signupdata, [event.target.name]: event.target.value })
    const getSigninData = (event) => setSigninData({ ...signindata, [event.target.name]: event.target.value })
    const userSignup = async () => {    // method for sigunup new user 
        const data = await authrepo.signup(signupdata)
         setAccountToken(data.token)
         localStorage.setItem("token", data.token)
         navigate("/")
    }
    const userSignin = async () => {
        const data = await authrepo.signin(signindata)
        setAccountToken(data.token)
        localStorage.setItem("token", data.token)
        navigate("/")
    }
    return {
        getSignupdata,
        fillpassword,
        signupdata,
        verifyEmail,
        signindata,
        getSigninData,
        userSignup,
        userSignin
    }
}
export default useAuthViewModel