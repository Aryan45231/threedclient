import "./index.css"
import Component from "../../../Components"
import { AiOutlineLike, AiOutlineComment, AiOutlineFundView, } from "react-icons/ai";
import useHomwViewModel from "../HomeViewModel";

const NavBar = () => {
    return <Component.NavContainer>
        <Component.NavButton>
            For You
        </Component.NavButton>
        <Component.NavButton>
            Following
        </Component.NavButton>
    </Component.NavContainer>

}
const TweetCard = ({
    Likes = 0,
    Views = 0,
    Comments = 0,
    UserName = "User Name",
    UserProfile = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    Tweet = "hey , h fxow are you its my first tweet",
    tweetImage = "https://media.istockphoto.com/id/1437645042/photo/banknotes-and-pegdoll-with-arrows-one-in-a-different-direction-and-another-different-thinking.jpg?b=1&s=170667a&w=0&k=20&c=2cVRwa_hM22Di61JeBqqCNIKtFTylBy5NH4zYdinWeg="
}) => {
    return <div className="TweetCard">
        <div className="TweetzcardHeader">
            <img src={UserProfile} alt="" />
            <div className="tweettext">
                <h3> {UserName}</h3>
                <p> {Tweet} </p>
            </div>
        </div>
        <div className="TweetCardBody">
            {
                tweetImage !== undefined ?
                    // <img src={tweetImage} alt="someting went wrong" />
                    ""
                    :
                    ""
            }
        </div>
        <div className="TweetCardFooter">
            <div>
                <AiOutlineLike />  {Likes}
            </div>
            <div>
                <AiOutlineComment />  {Comments}
            </div>
            <div>
                <AiOutlineFundView />   {Views}
            </div>
        </div>
    </div>
}




export default {
    NavBar,
    TweetCard
}