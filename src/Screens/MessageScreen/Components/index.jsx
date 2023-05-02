import "./index.css"
const FreindDetailBox = ({
    freindProfile = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    friendName = "Friend Name",
    lastMessage = " hey there"
}) => {
    return <div className="FriendBoxContainer">
        <img src={freindProfile} alt="" />
        <div className="boxText">
            <h2> {friendName}</h2>
            <h3> {lastMessage}</h3>
        </div>
    </div>
}
const defaultPageBanner = () => {an
    return <div className="VannerCOntainer">
        <div className="ChildBannerContainer">
            <h1>Select a message</h1>
            <h3>
                Choose from your existing conversations, start a new one, or just keep swimming.
            </h3>
            <button className="bannerButton" >
                New Message
            </button>
        </div>
    </div>
}
const ChattingPannel = ({
    reciverName = "Aryan Jaiswal",
    reciverProfile = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    status = "offline"

}) => {
    return <div>
        <div className="chatHeader">
            <div className="reciverProfileContainer">
                <img src={reciverProfile} alt="" />
                <div className="reciverTextDetail">
                    <h3> {reciverName} </h3>
                    <h4> {status} </h4>
                </div>
            </div>
            <div className="reciverDetails">
               <h4> menu icon</h4>
            </div>
        </div>
        <div className="body">
        </div>
        <div className="chatFooter">
        </div>
    </div>
}
export default {
    FreindDetailBox,
    defaultPageBanner,
    ChattingPannel
}