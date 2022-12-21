import React from "react";
import TopUser from "../TopUser/TopUser";
import styles from "./TopUserList.module.scss";

export default function TopUserList({ topUsers }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>推薦跟隨</div>
        <ul className="list-unstyled ps-0">
          {topUsers?.map((user) => (
            <li key={user.id}>
              <TopUser user={user} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
