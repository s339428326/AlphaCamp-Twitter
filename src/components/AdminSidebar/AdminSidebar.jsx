//router
import { Link, useLocation, useNavigate } from "react-router-dom";
//context
import { useAuth } from "../../contexts/AuthContext";
//style
import styles from "./AdminSidebar.module.scss";

//icons

//logo
export const LogoIcon = ({ size }) => {
  return (
    <svg
      width={size || 40}
      height={size || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6995 18.4711C25.6995 18.4711 18.2327 30.5783 12.1108 30.5783C1.40302 30.5783 11.3819 7.51343 19.1915 7.51343C24.6409 7.51343 25.6995 18.4711 25.6995 18.4711Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z"
        fill="#FF6600"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z"
        fill="#FF6600"
      />
    </svg>
  );
};

//home
export const HomeActiveIcon = () => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.58 6.34998L12.475 0.896978C12.178 0.736978 11.821 0.736978 11.525 0.896978L1.42496 6.34998C0.938957 6.61398 0.757957 7.21998 1.01996 7.70598C1.19996 8.04098 1.54496 8.23098 1.89996 8.23098C2.05996 8.23098 2.22396 8.19298 2.37496 8.11098L3.10896 7.71498L4.69896 18.965C4.91496 20.179 6.00896 21.027 7.35896 21.027H16.641C17.991 21.027 19.085 20.179 19.303 18.939L20.891 7.71398L21.628 8.11198C22.113 8.37498 22.72 8.19398 22.982 7.70798C23.245 7.22198 23.062 6.61498 22.578 6.35298L22.58 6.34998ZM12 14.435C10.205 14.435 8.74996 12.98 8.74996 11.185C8.74996 9.38998 10.205 7.93498 12 7.93498C13.795 7.93498 15.25 9.38998 15.25 11.185C15.25 12.98 13.795 14.435 12 14.435Z"
        fill="#FF6600"
      />
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4602 5.56999L11.3572 0.114994C11.1342 -0.0050061 10.8672 -0.0050061 10.6442 0.114994L0.543237 5.56999C0.179237 5.76699 0.0432375 6.22199 0.240237 6.58699C0.375237 6.83699 0.634237 6.97999 0.900237 6.97999C1.02024 6.97999 1.14324 6.94999 1.25624 6.88999L2.07124 6.44999L3.70024 17.963C3.91424 19.178 5.00824 20.025 6.35824 20.025H15.6402C16.9922 20.025 18.0852 19.177 18.3032 17.938L19.9292 6.44799L20.7472 6.88999C21.1112 7.08299 21.5672 6.94999 21.7642 6.58599C21.9602 6.22299 21.8242 5.76799 21.4602 5.56999ZM16.8222 17.703C16.7152 18.309 16.1192 18.525 15.6422 18.525H6.36024C5.88024 18.525 5.28524 18.309 5.18224 17.727L3.48024 5.68999L11.0002 1.62799L18.5222 5.68799L16.8222 17.703Z"
        fill="#44444F"
      />
      <path
        d="M7.22021 10.184C7.22021 12.268 8.91521 13.964 11.0002 13.964C13.0852 13.964 14.7802 12.268 14.7802 10.184C14.7802 8.09999 13.0852 6.40399 11.0002 6.40399C8.91521 6.40399 7.22021 8.09999 7.22021 10.184ZM13.2802 10.184C13.2802 11.442 12.2582 12.464 11.0002 12.464C9.74221 12.464 8.72021 11.442 8.72021 10.184C8.72021 8.92599 9.74221 7.90399 11.0002 7.90399C12.2582 7.90399 13.2802 8.92599 13.2802 10.184Z"
        fill="#44444F"
      />
    </svg>
  );
};

//profile
export const ProfileIcon = () => {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 10.816C10.355 10.816 11.872 10.666 12.84 9.56001C13.654 8.63001 13.918 7.19201 13.646 5.16801C13.266 2.34301 11.529 0.656006 9 0.656006C6.471 0.656006 4.734 2.34301 4.354 5.17001C4.082 7.19201 4.346 8.63001 5.16 9.56001C6.128 10.667 7.645 10.816 9 10.816ZM5.84 5.36801C6.002 4.16801 6.627 2.15601 9 2.15601C11.373 2.15601 11.998 4.16901 12.16 5.36801C12.367 6.91801 12.217 7.99501 11.71 8.57301C11.255 9.09301 10.444 9.31601 9 9.31601C7.556 9.31601 6.745 9.09301 6.29 8.57301C5.783 7.99501 5.633 6.91701 5.84 5.36801ZM17.28 18.236C16.403 14.71 12.998 12.246 9 12.246C5.002 12.246 1.597 14.71 0.719997 18.236C0.547997 18.928 0.691997 19.636 1.115 20.176C1.523 20.696 2.155 20.996 2.848 20.996H15.152C15.845 20.996 16.477 20.696 16.885 20.176C17.309 19.636 17.452 18.929 17.279 18.236H17.28ZM15.704 19.252C15.578 19.412 15.388 19.498 15.152 19.498H2.848C2.613 19.498 2.422 19.413 2.296 19.252C2.159 19.078 2.116 18.84 2.176 18.598C2.886 15.743 5.693 13.748 9 13.748C12.307 13.748 15.114 15.742 15.824 18.598C15.884 18.84 15.841 19.078 15.704 19.252Z"
        fill="#44444F"
      />
    </svg>
  );
};

export const ProfileActiveIcon = () => {
  return (
    <svg
      width="17"
      height="21"
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.22501 10.165C6.86901 10.165 5.35301 10.015 4.38501 8.909C3.57101 7.979 3.30801 6.541 3.58001 4.517C3.96001 1.691 5.69601 0.0039978 8.22601 0.0039978C10.756 0.0039978 12.493 1.691 12.872 4.517C13.144 6.541 12.88 7.977 12.066 8.909C11.096 10.015 9.58101 10.164 8.22601 10.164L8.22501 10.165ZM14.074 20.015H2.37601C1.71301 20.015 1.12601 19.735 0.72601 19.229C0.30401 18.695 0.15001 17.959 0.31601 17.261C1.15001 13.731 4.40201 11.264 8.22401 11.264C12.046 11.264 15.298 13.73 16.134 17.261C16.298 17.959 16.144 18.695 15.722 19.228C15.322 19.733 14.737 20.013 14.074 20.013V20.015Z"
        fill="#FF6600"
      />
    </svg>
  );
};

//logout
export const LogOutIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z"
        fill="#44444F"
      />
      <path
        d="M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z"
        fill="#44444F"
      />
    </svg>
  );
};

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //?????????????????????
  const isHome = pathname === "/admin_main";
  //
  const { logout } = useAuth();

  return (
    <nav className={`${styles["nav"]} pt-3`}>
      <div className="d-flex justify-content-center d-lg-none">
        <LogoIcon size={32} />
      </div>
      <div className="ps-2 d-none d-lg-block">
        <LogoIcon />
      </div>
      <ul className="pt-3 d-flex flex-column list-unstyled align-items-center align-items-lg-start">
        <li className={styles["list-item"]}>
          <Link to={"/admin_main"}>
            <div className="d-flex gap-3 fw-bold">
              {isHome ? <HomeActiveIcon /> : <HomeIcon />}

              <p className={`${isHome && "text-primary"} d-none d-lg-block`}>
                ????????????
              </p>
            </div>
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link to={"/admin_users"}>
            <div className="d-flex gap-3 fw-bold text-light">
              {pathname === "/admin_users" ? (
                <ProfileActiveIcon />
              ) : (
                <ProfileIcon />
              )}
              <p
                className={`${
                  pathname === "/admin_users" ? "text-primary" : ""
                } d-none d-lg-block`}
              >
                ???????????????
              </p>
            </div>
          </Link>
        </li>

        <li
          onClick={() => {
            logout();
            navigate("/admin");
          }}
          className={`${styles["logout"]}`}
        >
          <div className="d-flex gap-2 align-items-center pb-3">
            <div className="d-flex justify-content-center">
              <LogOutIcon />
            </div>
            <p className="d-none d-lg-block">??????</p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;
