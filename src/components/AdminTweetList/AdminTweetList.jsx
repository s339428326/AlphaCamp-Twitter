import styles from "./AdminTweetList.module.scss";
import CloseButton from "react-bootstrap/CloseButton";

const AdminTweetList = ({
  userName,
  userId,
  userAvatar,
  createTime,
  tweetId,
  isLike,
  tweetContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo in ipsum, omnis mollitia aliquam quaerat ducimus. Repudiandae ea blanditiis dolorum delectuasdasdasdasdasdass aspernatur eius reprehenderit distinctio nostrum e",
}) => {
  return (
    <section className="border-start border-end border-bottom px-4 py-3 d-flex gap-2">
      <div>
        <img
          className="rounded"
          src={
            userAvatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user-avatar"
          width={50}
          height={50}
        />
      </div>
      <div>
        <div
          className={`${styles["tweet-header"]} d-flex align-items-center gap-2`}
        >
          <strong>{userName || "無讀取資料"}</strong>
          <small className="text-light mb-0">
            @{userId || "無讀取資料"}・{createTime || "無讀取資料"}
          </small>
          <div className="ms-auto">
            <CloseButton />
          </div>
        </div>
        <p className={`${styles["tweet-content"]} mb-0`}>
          {tweetContent || "無讀取資料"}
        </p>
      </div>
    </section>
  );
};
export default AdminTweetList;
