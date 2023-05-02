import React, { useEffect, useState } from "react";
import { TweetRepository } from "../../data/Repository/TweetRepository";

const useHomwViewModel = () => {
  
  const tweetRepository = new TweetRepository()
  const [tweetArray, setTweetArray] = useState([])
  const getTweet = async () => {
    const data = await tweetRepository.getTweet()

    setTweetArray([ ...data.tweets])
  }
  useEffect(() => {
     getTweet()
   
  }, [])
  return{
    tweetArray
  }

}
export default useHomwViewModel