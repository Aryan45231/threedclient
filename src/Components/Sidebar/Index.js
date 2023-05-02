import { useEffect, useRef, useState } from "react"
import { TweetRepository } from "../../data/Repository/TweetRepository"
import { UserRepository } from "../../data/Repository/UserRepository"
const useSidebar = () => {
    const userRepository = new UserRepository()
    const tweetRepository = new TweetRepository()
    const [newTweet, setNewTweet] = useState(false)
    const [tagbox, setTagBox] = useState(false)
    const [tweetpayload, setTweetpPayload] = useState({ data: "", share_with: "everyone" })
    const [searcheduserarray, setSearchedUserArray] = useState([])
    const inputelement = useRef();

    const addTag = (name) => {
        return () => {
            const lastWord = tweetpayload.data.split(" ").pop()
            let newtext = ""
            const lastIndex = tweetpayload.data.lastIndexOf(lastWord)
            lastWord.startsWith("@") ?
                newtext = tweetpayload.data.slice(0, lastIndex) + '@' + name + " " :
                newtext = tweetpayload.data.slice(0, lastIndex) + name + " "
            setTweetpPayload({ ...tweetpayload, data: newtext })
            setTagBox(false)
            inputelement.current.focus()
        }
    }

    const getTweetPayload = async (event) => {
        if (event.target.name === "data") {
            const data = event.target.value
            const lastWord = data.split(" ").pop()
            if (lastWord.length > 1 && lastWord.startsWith("@") || lastWord.length > 1 && lastWord.startsWith("#")) {
                setTagBox(true)
                if (lastWord.startsWith("@")) {
                    const searchInput = lastWord.split("@")[1]
                    const res = await userRepository.searchUser({ searchInput })
                    setSearchedUserArray([...res.searched_array])
                } else {
                    const searchInput = lastWord
                    const res = await userRepository.searchHashTag({ searchInput })
                    setSearchedUserArray([...res.searched_array])
                }
            }
            else {
                setTagBox(false)
                setSearchedUserArray([])
            }
            setTweetpPayload({ ...tweetpayload, data })
        } else {
            setTweetpPayload({ ...tweetpayload, share_with: event.target.value })
        }
    }

    const postTweet = async () => {
        const data = await tweetRepository.newTweet(tweetpayload)
        setNewTweet(false)
    }
    const menusItems = [
        {
            Icon: "", Option: "Home", link: "/"
        }, {
            Icon: "", Option: "Explore", link: "/"
        }, {
            Icon: "", Option: "Notification", link: "/"
        }, {
            Icon: "", Option: "Messages", link: "/messages"
        }, {
            Icon: "", Option: "BookMarks", link: "/"
        }, {
            Icon: "", Option: "Twitter Bev ", link: "/"
        }, {
            Icon: "", Option: "Profile", link: "/profile/abc"
        }, {
            Icon: "", Option: "More", link: "/"
        }
    ]
    return {
        menusItems,
        setNewTweet,
        newTweet,
        getTweetPayload,
        tweetpayload,
        postTweet,
        tagbox,
        searcheduserarray,
        addTag,
        inputelement
    }
}
export default useSidebar