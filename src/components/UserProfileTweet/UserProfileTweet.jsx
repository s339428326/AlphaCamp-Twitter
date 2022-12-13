import React from "react";
import Tweet from "../Tweet/Tweet";

const UserProfileTweet = ({ router }) => {
  return (
    <div>
      {router === "" && <Tweet />}
      {router === "reply" && <p> reply</p>}
      {router === "like" && <Tweet isLike={true} />}
    </div>
  );
};

export default UserProfileTweet;
