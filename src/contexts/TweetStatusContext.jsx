import { createContext, useState, useContext } from "react";

const defaultTweetStatusContext = {
  isUserTweetUpdate: false,
  isGlobalTweetUpdate: false,
};

//export useAuth
const TweetStatusContext = createContext(defaultTweetStatusContext);
export const useTweetStatus = () => useContext(TweetStatusContext);

//
export const TweetStatusProvider = ({ children }) => {
  const [isUserTweetUpdate, setIsUserTweetUpdate] = useState(true);
  const [isGlobalTweetUpdate, setIsGlobalTweetUpdate] = useState(true);

  return (
    <TweetStatusContext.Provider
      value={{
        isUserTweetUpdate,
        isGlobalTweetUpdate,
        setIsUserTweetUpdate,
        setIsGlobalTweetUpdate,
      }}
    >
      {children}
    </TweetStatusContext.Provider>
  );
};
