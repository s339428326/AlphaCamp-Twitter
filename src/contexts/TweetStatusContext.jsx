import { createContext, useState, useContext } from "react";

const defaultTweetStatusContext = {
  isReplyTweetUpdate: false,
  isUserTweetUpdate: false,
  isGlobalTweetUpdate: false,
  isFollowingUpdate: false,
};

//export useAuth
const TweetStatusContext = createContext(defaultTweetStatusContext);
export const useTweetStatus = () => useContext(TweetStatusContext);

//
export const TweetStatusProvider = ({ children }) => {
  const [isUserTweetUpdate, setIsUserTweetUpdate] = useState(true);
  const [isGlobalTweetUpdate, setIsGlobalTweetUpdate] = useState(true);
  const [isReplyTweetUpdate, setIsReplyTweetUpdate] = useState(true);
  const [isFollowingUpdate, setIsFollowingUpdate] = useState(true);

  return (
    <TweetStatusContext.Provider
      value={{
        isUserTweetUpdate,
        isGlobalTweetUpdate,
        isReplyTweetUpdate,
        isFollowingUpdate,
        setIsUserTweetUpdate,
        setIsGlobalTweetUpdate,
        setIsReplyTweetUpdate,
        setIsFollowingUpdate,
      }}
    >
      {children}
    </TweetStatusContext.Provider>
  );
};
