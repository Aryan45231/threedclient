import { createContext, useEffect, useState, useRef } from "react"
import { io} from   "socket.io-client"
export const AccountContext = createContext(null)
import { AppUrl } from "../data/res/AppUrl"
const ContextProvider = ({
    children
}) => {
    const socket = useRef()
    const url = new AppUrl()
    const [accountTOken, setAccountToken] = useState("")
    useEffect(()=>{
        socket.current =  io(url.baseUrl)
    }, [accountTOken])
    return <AccountContext.Provider value={{
        accountTOken,
        setAccountToken,
        socket
    }}>
        {children}
    </AccountContext.Provider>
}
export default ContextProvider