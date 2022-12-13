import React from "react";
import styles from "./AdminUserList.module.scss";

export const HeartIcon = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
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

export const TweetIcon = () => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.8 5.19995H5.6V1.89995C5.6 1.49995 5.3 1.09995 4.8 1.09995C4.3 1.09995 4.1 1.49995 4.1 1.89995V5.19995H0.8C0.4 5.19995 0 5.49995 0 5.99995C0 6.49995 0.3 6.79995 0.8 6.79995H4.1V10.1C4.1 10.5 4.4 10.9 4.9 10.9C5.4 10.9 5.7 10.6 5.7 10.1V6.69995H9C9.4 6.69995 9.8 6.39995 9.8 5.89995C9.8 5.39995 9.3 5.19995 8.8 5.19995ZM23.8 0.299951V0.199951H23.7C23.6 0.199951 14.5 1.39995 9.3 11.9C5.5 19.5 5.7 21.7999 6 21.7999C6.3 21.9 9.4 15.3 12.7 12.6C17.9 11.5 19.3 8.99995 19.3 8.99995C19.3 8.99995 17.8 9.19995 17.2 9.19995C16.4 9.19995 15.8 8.99995 15.5 8.89995C16.8 7.69995 17.9 7.39995 19 7.19995C19.9 6.99995 20.8 6.79995 22 5.99995C24.2 4.39995 23.9 0.499951 23.8 0.299951Z"
        fill="#696974"
      />
    </svg>
  );
};

export function AdminUserCard() {
  return (
    <li className={`${styles["card-container"]} mb-0 list-unstyled`}>
      <div className={`${styles["card"]}`}>
        <div className={`${styles["card-header"]}`}>
          <img
            className={`${styles["card-cover"]}`}
            src="https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg"
            alt="user-cover"
          />
          <img
            className={`${styles["card-avatar"]}`}
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
        </div>
        <div
          className={`${styles["card-content"]} d-flex flex-column align-items-center`}
        >
          <strong>John Doe</strong>
          <small>@heyjohn</small>
          <div className={`${styles["card-info"]} d-flex gap-3 mt-3`}>
            <div className="d-flex gap-1">
              <TweetIcon />
              <p>1.5K</p>
            </div>
            <div className="d-flex gap-1">
              <HeartIcon size={24} />
              <p>20K</p>
            </div>
          </div>
          <div className="d-flex gap-2 pb-4">
            <small>
              34 個<span className="text-light">跟隨中</span>
            </small>
            <small>
              59 位<span className="text-light">跟隨者</span>
            </small>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function AdminUserList() {
  return (
    <ul className={`${styles["container"]}`}>
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
      <AdminUserCard />
    </ul>
  );
}
