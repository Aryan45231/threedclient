import React from 'react';
import "./profile.css"
import Component from '../../Components';
import ScreenComponent from "./Components/Index"
import HomeScreenComponent from "../HomeScreen/Components/index.jsx"
import useProfileViewModel from './ProfileViewMode.';
function Profile(props) {
    const { userData } = useProfileViewModel()
    return (
        <Component.MainContainer>
            <Component.SideBar />
            <Component.ContentPanel>
                <Component.Header heading={userData.name} subHeading={userData.email} />
                <div className='ProfileDetailContainer'>
                    <ScreenComponent.ProfileBanner />
                    <ScreenComponent.ProfileDetails
                        name={userData.name}
                        userName={userData.email}
                    />
                    {
                        userData.tweets.map((ele, ind) => {
                            return <HomeScreenComponent.TweetCard
                                Likes={ele.likes}
                                Comments={ele.comments}
                                UserName={ele.name}
                                key={ind}
                                Tweet={ele.posts}
                            />
                        })
                    }
                </div>
            </Component.ContentPanel>
            <div className="sideContainer">
                <input type="text" placeholder='&#128269; Search the item' />
                <Component.SideCard className='WhatsHappeningCard'>
                    <p> What's Happening </p>
                </Component.SideCard>
                <Component.SideCard >
                    <h3> Who TO Fallow</h3>
                </Component.SideCard>
            </div>
        </Component.MainContainer>
    );
}

export default Profile;