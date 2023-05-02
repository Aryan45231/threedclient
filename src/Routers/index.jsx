import { Route, Router, Routes } from "react-router-dom";
import Authentication from "../Screens/AuthenticationScreen/Authentication.jsx"
import Home from "../Screens/HomeScreen/Home.jsx";
import Profile from "../Screens/ProfileScreens/Profile.jsx";
import MessagePannel from "../Screens/MessageScreen/Message.jsx";
const ScreenRoutes = () => {
   return <Routes>
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/profile/:username" element = {<Profile/>}  />
      <Route path="/messages" element  = { <MessagePannel/> }/>
      <Route path="/" element={<Home />} />
   </Routes>
}
export default ScreenRoutes