import { useNavigate } from "react-router-dom";
import styles from "./PageTitle.module.scss";
//react-router-dom

//icons
export const ArrowLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11H7.41399L11.707 6.707C12.097 6.317 12.097 5.684 11.707 5.293C11.317 4.902 10.684 4.903 10.293 5.293L4.29299 11.293C3.90299 11.683 3.90299 12.316 4.29299 12.707L10.293 18.707C10.488 18.902 10.743 19 11 19C11.257 19 11.512 18.902 11.707 18.707C12.097 18.317 12.097 17.684 11.707 17.293L7.41399 13H20C20.553 13 21 12.553 21 12C21 11.447 20.553 11 20 11Z"
        fill="black"
      />
    </svg>
  );
};

/*
title => 主題
tweetQuantity => 推文數量(string)
*/

const PageTitle = ({ title, tweetQuantity }) => {
  const navigate = useNavigate();
  const normalTitleLsit = ["首頁", "推文清單", "帳戶設定", "使用者列表"];
  const isNormalTitle = normalTitleLsit.find((item) => item === title);

  ///////////整理PageTitle推文字串///////////
  const replyCountString = (tweetCount) => {
    if (tweetCount === 0) return "0";
    if (tweetCount > 1000) return `${(tweetCount / 1000).toFixed(2)}K`;
    return tweetCount;
  };
  tweetQuantity = replyCountString(tweetQuantity);
  ///////////整理PageTitle推文字串///////////

  return (
    <div className={`${styles["title"]}`}>
      {!isNormalTitle && (
        <button onClick={() => navigate(-1)} className={`${styles["svg"]}`}>
          <ArrowLeftIcon />
        </button>
      )}

      <div>
        <h1 className={`${title && !tweetQuantity && styles["page-title"]}`}>
          {title || "沒有設置title props"}
        </h1>
        {title !== "首頁" && title && tweetQuantity && (
          <p>{tweetQuantity} 推文</p>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
