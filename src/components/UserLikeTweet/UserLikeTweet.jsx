//style
import styles from "./UserLikeTweet.module.scss";
//component
import MainReplyModal from "../MainReplyModal/MainReplyModal";
//react
import { useState } from "react";
import { useLocation } from "react-router-dom";

//hook
import useMoment from "../../hooks/useMoment";

import jwt_decode from "jwt-decode";

export const HeartIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00005 14.4253H7.99072C6.26872 14.3933 1.30005 9.90398 1.30005 5.65198C1.30005 3.60931 2.98338 1.81598 4.90205 1.81598C6.42872 1.81598 7.45538 2.86931 7.99938 3.63598C8.54205 2.87065 9.56871 1.81598 11.096 1.81598C13.016 1.81598 14.6987 3.60931 14.6987 5.65265C14.6987 9.90331 9.72938 14.3926 8.00738 14.424H8.00005V14.4253ZM4.90272 2.81665C3.51605 2.81665 2.30072 4.14198 2.30072 5.65331C2.30072 9.47998 6.99005 13.384 8.00072 13.4253C9.01272 13.384 13.7007 9.48065 13.7007 5.65331C13.7007 4.14198 12.4854 2.81665 11.0987 2.81665C9.41338 2.81665 8.47205 4.77398 8.46405 4.79331C8.31072 5.16798 7.69338 5.16798 7.53938 4.79331C7.53005 4.77331 6.58938 2.81665 4.90338 2.81665H4.90272Z"
        fill="#6C757D"
      />
    </svg>
  );
};

//icon
export const RedHeartIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99999 14.4254H7.99065C6.26865 14.3934 1.29999 9.90404 1.29999 5.65204C1.29999 3.60937 2.98332 1.81604 4.90199 1.81604C6.42865 1.81604 7.45532 2.86937 7.99932 3.63604C8.54199 2.87071 9.56865 1.81604 11.096 1.81604C13.016 1.81604 14.6987 3.60937 14.6987 5.65271C14.6987 9.90337 9.72932 14.3927 8.00732 14.424H7.99999V14.4254Z"
        fill="#FC5A5A"
      />
    </svg>
  );
};

//  {
//     "id": 374,
//     "TweetId": 104,
//     "createdAt": 1671369546000,
//     "Tweet": {
//         "id": 104,
//         "description": "Consequuntur dolor id animi sint.",
//         "createdAt": 1671163227000,
//         "replyCount": 3,
//         "likeCount": 2,
//         "User": {
//             "id": 24,
//             "name": "user2",
//             "account": "user2",
//             "avatar": "https://loremflickr.com/320/240/girl/?lock=64.07136831048908"
//         },
//     "isLiked": true
// }

const UserLikeTweet = ({ data }) => {
  const { pathname } = useLocation();
  const urlUserId = pathname.split("/")[1];
  const token = localStorage.getItem("token");
  const decodeData = jwt_decode(token);

  /*Like 暫時作法*/
  const [likeCount, setLikeCount] = useState(data?.Tweet.likeCount);
  const [like, setLike] = useState(true);
  const handleLike = () => {
    if (like) {
      setLikeCount((prevValue) => prevValue - 1);
    } else {
      setLikeCount((prevValue) => prevValue + 1);
    }
    setLike((prevValue) => !prevValue);
  };
  /*Like 暫時作法*/

  return (
    <section className="border-start border-end border-bottom px-4 py-3 d-flex gap-2">
      <div>
        <img
          className="rounded-circle"
          src={data?.Tweet.User.avatar}
          alt="user-avatar"
          width={50}
          height={50}
        />
      </div>
      <div>
        <div
          className={`${styles["tweet-header"]} d-flex align-items-center gap-2`}
        >
          <strong>{data?.Tweet.User.name || "無讀取資料"}</strong>
          <small className="text-light mb-0">
            @{data?.Tweet.User.account || "無讀取資料"}・
            {useMoment(data?.createdAt) || "無讀取資料"}
          </small>
        </div>
        <p className={`${styles["tweet-content"]}`}>
          {data?.Tweet.description || "無讀取資料"}
        </p>
        <div className={`${styles["tweet-footer"]} d-flex`}>
          <div className="d-flex gap-2">
            <MainReplyModal width={16} height={16} />
            <span className="font-monospace text-light me-4">
              {data?.Tweet.replyCount}
            </span>
          </div>
          {/* Like邏輯 */}
          {decodeData.id !== Number(urlUserId) ? (
            <button className="d-flex gap-2 border-0 p-0 bg-transparent">
              <RedHeartIcon />
              <span className="font-monospace text-light">{likeCount}</span>
            </button>
          ) : (
            <button
              onClick={handleLike}
              className="d-flex gap-2 border-0 p-0 bg-transparent"
            >
              {like ? <RedHeartIcon /> : <HeartIcon />}
              <span className="font-monospace text-light">{likeCount}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserLikeTweet;
