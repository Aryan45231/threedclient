import React from 'react'
import Components from "../../../Components/index"
import "./index.css"
import Component from '../../../Components/index'
const ProfileBanner = ({
    profileBannerImage
}) => {
    return (
        <div className="ProfileBannerContainer">
            <Components.SideCard>
                {profileBannerImage ? <img src={profileBannerImage} alt=" " /> : ""}
            </Components.SideCard>
        </div>
    )
}
const ProfileDetails = ({
    profileImage = "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
    name = "Aryan Jaiswal",
    userName = "aryan78231"
}) => {
    return (
        <div className="profileDetailContainer">
            <div className="profileImageContainer">
                <img src={profileImage} alt="" />
                <button type="submit">Edit Profile</button>
            </div>
            <div className="ProfileTextDetails">
                <h2> {name}</h2>
                <h3> {userName} </h3>
            </div>
            <Component.NavContainer >
                <Component.NavButton>
                    Tweets
                </Component.NavButton>
                <Component.NavButton>
                    Replies
                </Component.NavButton>
                <Component.NavButton>
                    Media
                </Component.NavButton>
                <Component.NavButton>
                    Likes
                </Component.NavButton>
            </Component.NavContainer>
        </div>
    )
}

export default {
    ProfileBanner,
    ProfileDetails
}