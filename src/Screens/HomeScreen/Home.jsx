import React from 'react';
import Component from '../../Components';
import ScreenComponent from "./Components/index"
import useHomwViewModel from "./HomeViewModel"

import "./Home.css"
function Home() {
    const { tweetArray } = useHomwViewModel()
    return (
        <>
            <Component.MainContainer>
                <Component.SideBar />
                <Component.ContentPanel>
                    <div className='NavContainer'>
                        <h2>Home</h2>
                        <ScreenComponent.NavBar />
                    </div>
                    <div className="TweetCardContainer">
                        {
                            tweetArray.map((ele, ind) => {
                                return  <ScreenComponent.TweetCard
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
        </>
    );
}
export default Home;