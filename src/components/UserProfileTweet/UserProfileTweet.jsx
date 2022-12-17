//components
import Tweet from "../Tweet/Tweet";
//apis
import { getUserTweets } from "../../apis/userData";
//react-router-dom
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//推文
const Tweets = () => {
  const urlUserId = useLocation().pathname.split("/")[1];
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const userTweets = await getUserTweets(urlUserId);
        setData(userTweets.map((item) => item));
      } catch (error) {
        console.error(error);
      }
    };
    getTweets();
  }, [urlUserId]);
  return (
    <ul className="list-unstyled ps-0">
      {data.map((item) => (
        <li key={item.id}>
          <Tweet data={item} />
        </li>
      ))}
    </ul>
  );
};

const UserProfileTweet = ({ router }) => {
  return (
    <div>
      {(router === "tweet" || router === "") && <Tweets />}
      {router === "reply" && <p> reply</p>}
      {router === "like" && <Tweet isLike={true} />}
    </div>
  );
};

export default UserProfileTweet;
