import React from "react"
import Component from "../../Components/index"
import ScreenComponent from "./Components/index"
import "./Message.css"
const MessagePannel = () => {
    return <Component.MainContainer>
        <Component.SideBar />
        <div className="messageMenuContainer">
            <div className="Header">
                <h2> Message </h2>
            </div>
            <div className="searhBar">
                <Component.Input placeholder="Search Person" height="10px" borderRadius="45px" />
            </div>
            <div className="messageMenu">
                <ScreenComponent.FreindDetailBox />
                <ScreenComponent.FreindDetailBox />
                <ScreenComponent.FreindDetailBox /> <ScreenComponent.FreindDetailBox />
                <ScreenComponent.FreindDetailBox />
                 <ScreenComponent.FreindDetailBox /> <ScreenComponent.FreindDetailBox />
                 <ScreenComponent.FreindDetailBox />
                 <ScreenComponent.FreindDetailBox /> <ScreenComponent.FreindDetailBox />
            </div>
        </div>
        <Component.ContentPanel>
                <ScreenComponent.ChattingPannel/>
        </Component.ContentPanel>

    </Component.MainContainer>
}
export default MessagePannel