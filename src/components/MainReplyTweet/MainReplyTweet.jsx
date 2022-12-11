import styles from "./MainReplyTweet.module.scss";
import MainReplyModal from "../MainReplyModal/MainReplyModal";
import { useState } from "react";
export const HeartIcon = ({size}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
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

export const HeartedIcon = ({size}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
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

const MainReplyTweet = ({ user }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((current) => !current);
  };
  return (
    <div className={styles.container}>
      <div className="d-flex pb-2">
      <div className={styles.avatarContainer}>
        <img
          src={user || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          alt="user-avatar"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.tweetInfo}>
        <div className={styles.userName}>Apple</div>
        <div className={styles.userAccount}>@apple</div>
      </div>
      </div>
      <div className={styles.infoContent}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ullam
        laboriosam! Libero eos aut nostrum. Tempora, quidem reiciendis!
        Expedita, ea. Nisi impedit voluptates incidunt molestias, soluta modi
        deleniti magnam asperiores?
      </div>
      <div className={styles.time}>上午 10:05 ．2021年11月10日</div>
      <div className={styles.count}>
        <span className={styles.countNum}>34</span>
        <span className={styles.countTitle}>回覆</span>
        <span className={styles.countNum}>808</span>
        <span className={styles.countTitle}>喜歡次數</span>
      </div>
      <div className={styles.iconContainer}>
        <div className={styles.msgIcon}><MainReplyModal width={26} height={26}/></div>
        <span><button onClick={handleLike}>
          {like ? <HeartedIcon size={40} /> : <HeartIcon size={40}/>}
        </button></span>
      </div>
    </div>
  );
};

export default MainReplyTweet;
