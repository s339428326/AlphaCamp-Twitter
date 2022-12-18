import styles from "./AdminTweetList.module.scss";

import AdminTweetItem from "../AdminTweetItem/AdminTweetItem";

const AdminTweetList = ({ tweets, onDelete }) => {
  return (
    <section className="border-start border-end border-bottom d-flex flex-column gap-2">
      {tweets &&
        tweets.map((tweet) => {
          return (
            <AdminTweetItem
              tweet={tweet}
              key={tweet.id}
              onDelete={(id) => onDelete?.(id)}
            />
          );
        })}
    </section>
  );
};
export default AdminTweetList;
