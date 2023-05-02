import React from "react"
import { AiOutlineTwitter } from "react-icons/ai";
import "./index.css"
import Tools from "../Tools/Tools"
import Layout from "../Layout/Layout"
import useSidebar from "./Index";
import { Link } from "react-router-dom";
const TagBox = ({
    addTag,
    Array,
    UserProfile = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
}) => {
    return   <div className="TabBoxContainer">
       {
         Array.map((ele, ind)=>{
           return  <div key={ind} onClick={addTag(ele.name ? ele.name : ele.tag)} className="searchedContainer">
             <img src={UserProfile} alt="" />
             <h1> {ele.name ? ele.name : ele.tag} </h1>
            </div>
         })
       }
        </div>

}
const NewTweetPanel = ({
    close,
    UserProfile = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
}) => {
    const { tweetpayload, getTweetPayload,tagbox,inputelement, addTag, searcheduserarray , postTweet } = useSidebar()
    const submitTweet = () => {
        postTweet()
        close()
    }
    return <>
        <Layout.TransparentPanel >
            <Tools.DailogBox onClick={close} height="40%" width="50%">
                <div className="ProfilePart">
                    <img src={UserProfile} alt="" />
                </div>
                <div className="NewTweetBody">
                    <div className="NewTweetMainBody">
                        <select onChange={getTweetPayload} name="share_with" id="">
                            <option value="everyone">everyone</option>
                            <option value="connections">connections</option>
                        </select>
                        <textarea name="data" ref={inputelement} onChange={getTweetPayload} value={tweetpayload.data} id="" cols="30" placeholder="What's Happening" rows="10"></textarea>
                       {
                        (tagbox && searcheduserarray.length!=0)  ?
                         <TagBox Array={searcheduserarray} addTag={addTag} /> :""
                       }
                        <p>  Retweet Everyoone</p> 
                    </div>
                    <div className="NewTweetFooterBody">
                        <div className="newTweetOptions">

                        </div>
                        <button onClick={submitTweet} > Tweet</button>
                    </div>
                </div>
            </Tools.DailogBox>
        </Layout.TransparentPanel>
    </>
}

const SideBar = () => {
    const { menusItems, setNewTweet, newTweet } = useSidebar()
    const close = () => setNewTweet(false)
    return <>
        {
            newTweet ?
                <NewTweetPanel close={close} /> : ""
        }
        <div className="SideBarContainer">
            <div className="UpperPart">
                <AiOutlineTwitter style={{ fontSize: "50px", margin: "20px" }} />
                <div className="Menus">
                    <ul>
                        {
                            menusItems.map((ele, ind) => <li key={ind}>
                                <Link to={ele.link} className="link">
                                    <h3> {ele.Option} </h3>
                                </Link>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <button onClick={() => { setNewTweet(true) }}> New Tweet  </button>
            </div>
            <div className="LowerPart">
            </div>
        </div>
    </>
}
export default SideBar