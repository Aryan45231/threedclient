import React, { Children } from "react";
import Component from "../../../Components";
import { AiOutlineTwitter } from "react-icons/ai";
import useAuthViewModel from "../AuthenticationViewModel";
import "./index.css"

const AuthCard = ({ children }) => {
    return <>
        <Component.TransparentPanel  >
            <Component.DailogBox className="dialogbox" height="50%" width="35%">
                {children}
            </Component.DailogBox>
        </Component.TransparentPanel>
    </>
}

const Input = ({ type, placeholder, name, onChange, value }) =>
    <input required name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />

const signinForm = () => {
    const { userSignin , getSigninData, signindata}  = useAuthViewModel()
    return <>
        <AiOutlineTwitter className="TwitterLogo" />
        <div className='AuthenticationContainer'>
            <Input type="email" name="Email" onChange={getSigninData} value={signindata.Email} placeholder='Email' />
            <Input type="password" name="Password" onChange={getSigninData} value={signindata.Password} placeholder="Password" />
            <Component.WhiteButton onClick={userSignin} width="50%" > Sign In </Component.WhiteButton>
        </div>
    </>
}
const signupForm = () => {
    const { signupdata, getSignupdata, userSignup } = useAuthViewModel()
    return <div className="signupFormContainer">
        <p>  Step 1 to 5 { }</p>
        <div className="FormData">
            <h2> Create Your Account</h2>
            <div className="inputContainer">
                <Input type="text" placeholder='Name' onChange={getSignupdata} name="Name" value={signupdata.Name} />
                <Input type="email" placeholder='Email' name="Email" onChange={getSignupdata} value={signupdata.Email} />
                <Input type="Password" placeholder='password' onChange={getSignupdata} name="Password" value={signupdata.Password} />
                <Component.WhiteButton width="40%" onClick={userSignup} >  Signup </Component.WhiteButton>
            </div>
        </div>
    </div>
}
export default {
    AuthCard,
    signupForm,
    signinForm
}