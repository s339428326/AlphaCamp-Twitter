//components
import PageTitle from "../PageTitle/PageTitle";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import AuthInput from "../AuthInput/AuthInput";

//apis
import { putUserProfile, getUserData } from "../../apis/userData";

//css style
import styles from "./UserProfilePart.module.scss";

//react
import { useState, useEffect } from "react";

//icons
export const BallIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.24 3.26003H20.815V0.832031C20.815 0.418031 20.479 0.0820312 20.065 0.0820312C19.651 0.0820312 19.315 0.418031 19.315 0.832031V3.26003H16.89C16.476 3.26003 16.14 3.59503 16.14 4.01003C16.14 4.42503 16.476 4.76003 16.89 4.76003H19.316V7.18403C19.316 7.59803 19.652 7.93403 20.066 7.93403C20.48 7.93403 20.816 7.59803 20.816 7.18403V4.76003H23.241C23.656 4.76003 23.991 4.42303 23.991 4.01003C23.991 3.59703 23.655 3.26003 23.241 3.26003H23.24ZM17.01 10.866C17.03 8.43203 16.228 6.26903 14.752 4.77603C13.428 3.43403 11.636 2.69203 9.70604 2.68303H9.69304C7.76304 2.69303 5.97104 3.43303 4.64704 4.77503C3.17204 6.27003 2.37004 8.43303 2.39004 10.867C2.42604 15 0.467036 16.56 0.390036 16.62C0.130036 16.813 0.0230359 17.15 0.124036 17.458C0.226036 17.766 0.514036 17.973 0.836036 17.973H5.55204C5.66204 20.199 7.49204 21.98 9.74604 21.98C12 21.98 13.829 20.2 13.94 17.973H18.565C18.885 17.973 19.169 17.767 19.272 17.463C19.375 17.159 19.272 16.82 19.017 16.625C18.935 16.561 16.974 15 17.009 10.865L17.01 10.866ZM9.74504 20.48C8.31904 20.48 7.15904 19.37 7.05104 17.972H12.439C12.331 19.372 11.171 20.479 9.74504 20.479V20.48ZM2.45504 16.473C3.15704 15.378 3.91204 13.569 3.88904 10.855C3.87204 8.79303 4.50304 7.05503 5.71404 5.83003C6.75704 4.77403 8.17204 4.19003 9.70004 4.18403C11.227 4.19103 12.643 4.77403 13.685 5.83003C14.895 7.05603 15.525 8.79303 15.508 10.855C15.486 13.569 16.24 15.378 16.945 16.473H2.45504Z"
        fill="#FF6600"
      />
    </svg>
  );
};

export const ActiveBallIcon = () => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.61 0.150052C23.235 -0.0339485 22.788 0.120052 22.604 0.490052L19.74 6.26605L18.037 4.45605C17.754 4.15305 17.279 4.14005 16.977 4.42405C16.675 4.70805 16.661 5.18405 16.945 5.48405L19.388 8.08005C19.531 8.23005 19.728 8.31505 19.934 8.31505C19.97 8.31505 20.007 8.31205 20.044 8.30705C20.287 8.27105 20.496 8.11705 20.606 7.89705L23.948 1.15705C24.132 0.785051 23.98 0.335052 23.608 0.151052L23.61 0.150052ZM19.018 16.6251C18.935 16.5611 16.974 15.0001 17.008 10.8651C17.03 8.43205 16.228 6.26905 14.752 4.77505C13.428 3.43505 11.636 2.69205 9.70604 2.68305H9.69304C7.76304 2.69305 5.97104 3.43305 4.64704 4.77505C3.17204 6.27005 2.37004 8.43305 2.39004 10.8671C2.42604 15.0001 0.467036 16.5601 0.390036 16.6201C0.130036 16.8131 0.0230359 17.1501 0.124036 17.4581C0.226036 17.7661 0.514036 17.9731 0.836036 17.9731H4.91604C5.00404 20.5431 7.10904 22.6131 9.70104 22.6131C12.293 22.6131 14.399 20.5431 14.486 17.9731H18.568C18.888 17.9731 19.172 17.7671 19.275 17.4631C19.378 17.1591 19.273 16.8201 19.019 16.6251H19.018ZM9.70004 20.5131C8.26604 20.5131 7.10004 19.3861 7.01604 17.9731H12.384C12.299 19.3861 11.134 20.5131 9.70004 20.5131Z"
        fill="white"
      />
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="segment-fill"
        d="M19.25 3.01807H4.75C3.233 3.01807 2 4.25207 2 5.77007V18.2651C2 19.7831 3.233 21.0181 4.75 21.0181H19.25C20.767 21.0181 22 19.7831 22 18.2651V5.77007C22 4.25207 20.767 3.01807 19.25 3.01807ZM4.75 4.51807H19.25C19.94 4.51807 20.5 5.07807 20.5 5.76807V6.48207L12.45 11.8491C12.177 12.0291 11.824 12.0311 11.55 11.8471L3.5 6.48207V5.76807C3.5 5.07807 4.06 4.51807 4.75 4.51807ZM19.25 19.5161H4.75C4.06 19.5161 3.5 18.9561 3.5 18.2661V8.24007L10.74 13.0701C11.123 13.3261 11.562 13.4541 12 13.4541C12.44 13.4541 12.877 13.3261 13.26 13.0711L20.5 8.24107V18.2631C20.5 18.9531 19.94 19.5131 19.25 19.5131V19.5161Z"
      />
    </svg>
  );
};

export const CameraIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083H6.438C7.633 3.17 9.722 2 12 2C14.277 2 16.367 3.17 17.562 5.083H19.708C20.972 5.083 22 6.11 22 7.375V19.708C22 20.972 20.972 22 19.708 22ZM4.292 6.583C3.855 6.583 3.5 6.938 3.5 7.375V19.708C3.5 20.145 3.855 20.5 4.292 20.5H19.708C20.145 20.5 20.5 20.145 20.5 19.708V7.375C20.5 6.938 20.145 6.583 19.708 6.583H17.258C16.941 6.633 16.626 6.488 16.476 6.201C15.596 4.536 13.882 3.501 12 3.501C10.117 3.501 8.402 4.536 7.524 6.203C7.364 6.505 7.022 6.663 6.691 6.583H4.293H4.292Z"
        fill="white"
      />
      <path
        d="M12 8.16699C9.32001 8.16699 7.14001 10.347 7.14001 13.027C7.14001 15.707 9.32001 17.887 12 17.887C14.68 17.887 16.86 15.707 16.86 13.027C16.86 10.347 14.68 8.16699 12 8.16699ZM14 13.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75C11.586 15.75 11.25 15.414 11.25 15V13.75H10C9.58601 13.75 9.25001 13.414 9.25001 13C9.25001 12.586 9.58601 12.25 10 12.25H11.25V11C11.25 10.586 11.586 10.25 12 10.25C12.414 10.25 12.75 10.586 12.75 11V12.25H14C14.414 12.25 14.75 12.586 14.75 13C14.75 13.414 14.414 13.75 14 13.75Z"
        fill="white"
      />
    </svg>
  );
};

export const CrossIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.414 12L19.207 6.207C19.597 5.817 19.597 5.184 19.207 4.793C18.817 4.402 18.184 4.403 17.793 4.793L12 10.586L6.207 4.793C5.817 4.403 5.184 4.403 4.793 4.793C4.402 5.183 4.403 5.816 4.793 6.207L10.586 12L4.793 17.793C4.403 18.183 4.403 18.816 4.793 19.207C4.988 19.402 5.243 19.5 5.5 19.5C5.757 19.5 6.012 19.402 6.207 19.207L12 13.414L17.793 19.207C17.988 19.402 18.243 19.5 18.5 19.5C18.757 19.5 19.012 19.402 19.207 19.207C19.597 18.817 19.597 18.184 19.207 17.793L13.414 12Z"
        fill="white"
      />
    </svg>
  );
};

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
{
    "id": 14,
    "account": "user1",
    "name": "user1",
    "email": "user1@example.com",
    "avatar": "https://i.imgur.com/k4iCvXX.png",
    "cover": "https://i.imgur.com/ZxEsjfY.jpg",
    "introduction": "Hola amigos!",
    "tweetCount": 10,
    "followingCount": 1,
    "followerCount": 1,
    "isFollowed": false
}
*/

const UserProfilePart = ({ userData, isOtherUser, isNotin }) => {
  useEffect(() => {
    console.log("重新更新userData");
    setFormData({
      name: userData?.name,
      introduction: userData?.introduction,
      avatar: userData?.avatar,
      cover: userData?.cover,
    });
  }, [userData]);

  //確認是否正在上傳
  const [isUpload, setIsUpload] = useState(false);
  //用來暫存上傳資料
  const [formData, setFormData] = useState();
  //暫存modal更換即時顯示圖片檔案
  const [imageView, setImageView] = useState();

  /*Modal Setting*/
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // 復歸FromData
    setFormData({
      ...formData,
      cover: userData?.cover,
      avatar: userData?.avatar,
    });
    setShow(false);
  };

  const handleShow = async () => {
    // 復歸modal imageView
    const data = await getUserData(userData?.id);
    console.log("hi", data);
    setImageView({
      ...imageView,
      cover: data?.cover,
      avatar: data?.avatar,
    });
    setFullscreen("sm-down");
    setShow(true);
  };

  /*Modal Setting*/

  //////AuthInput嘗試實作錯誤訊息//////////
  const [errorMessage, setErrorMassage] = useState({
    userName: "",
  });

  const handleName = (value) => {
    if (!value.length) {
      setErrorMassage({ ...errorMessage, userName: "請勿空白" });
    } else {
      setErrorMassage({ ...errorMessage, userName: "" });
    }
  };
  //////AuthInput嘗試實作錯誤訊息//////////
  const [count, setCount] = useState(
    userData?.introduction ? userData?.introduction.length : 0
  );

  const handleIntroduction = (e) => {
    setCount(e.target.value.length);
    setFormData({ ...formData, introduction: e.target.value });
  };

  const handleCover = (e) => {
    const file = e.target.files[0];
    if (e.target.files[0].size >= 1048576) {
      return;
    }
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener(
      "load",
      () => {
        setImageView({ ...imageView, cover: reader.result });
      },
      false
    );
    setFormData(() => {
      const data = { ...formData, cover: file };
      return data;
    });
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (e.target.files[0].size >= 1048576) {
      // Swal.fire({
      //   position: "top",
      //   icon: "error",
      //   title: "上傳檔案錯誤",
      //   text: "圖片大小請勿超過10MB!",
      // });
      return;
    }
    // 建置使用者imageView ,非上傳圖片。
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.addEventListener(
      "load",
      () => {
        setImageView({ ...imageView, avatar: reader.result });
      },
      false
    );

    //
    setFormData({ ...formData, avatar: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("[傳送進確認的樣子]", formData);
    if (formData?.name === "") {
      return;
    }
    console.log(formData);
    const form = new FormData();
    form.append("name", formData.name);
    form.append("introduction", formData.introduction);
    if (typeof formData.avatar !== "string") {
      form.append("avatar", formData.avatar);
    }
    if (typeof formData.cover !== "string") {
      form.append("cover", formData.cover);
    }
    //查看form 傳送資料
    console.log([...form]);
    //確認上傳
    setIsUpload(true);
    const upadate = await putUserProfile(userData?.id, form);
    const setForm = await getUserData(userData?.id);
    setFormData({
      name: setForm?.name,
      introduction: setForm?.introduction,
      avatar: setForm?.avatar,
      cover: setForm?.cover,
    });
    console.log("[更新資料]", formData);
    console.log("[上傳成功]", upadate);
    setIsUpload(false);
    //確認已完成上傳
    setShow(false);
  };

  //////上傳使用者圖片//////

  //User Cover 顯示邏輯
  const UserCover = () => {
    if (userData?.cover === null) {
      return (
        <img
          className={`${styles["bg"]}`}
          src="https://fakeimg.pl/639x200/"
          alt="use-background"
        />
      );
    }
    if (formData?.cover) {
      return (
        <img
          className={`${styles["bg"]}`}
          src={formData?.cover}
          alt="use-background"
        />
      );
    } else {
      return (
        <div className={`${styles["bg-loading"]}`}>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  };

  //User Avatar 顯示邏輯
  const UserAvatar = () => {
    if (userData?.cover === null) {
      return (
        <img
          className={`${styles["avatar"]}`}
          src={
            userData?.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="user-avatar"
          width={140}
          height={140}
        />
      );
    }

    if (formData?.avatar) {
      return (
        <img
          className={`${styles["avatar"]}`}
          src={formData?.avatar}
          alt="user-avatar"
          width={140}
          height={140}
        />
      );
    } else {
      return (
        <div className={`${styles["avatar"]}`}>
          <div
            className={`${styles["avatar-loading"]} spinner-border text-secondary`}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="sticky-top">
        <PageTitle
          title={formData?.name || "讀取中..."}
          tweetQuantity={userData?.tweetCount}
        />
      </div>
      <div className={`${styles["profile"]} border-start border-end`}>
        {/* 使用者背景 */}
        <UserCover />
        <div className={`${styles["user-avatar"]} p-3`}>
          {/* 使用者頭像 */}
          <UserAvatar />
          <div className="mb-3">
            {/* 是否為本人樣式切換 */}
            {/* <ButtonView /> */}
            {userData?.isVisitOthers === undefined ? (
              <div className="d-flex align-items-center text-secondary">
                <div
                  className="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            ) : userData?.isVisitOthers === true ? (
              <div className="d-flex align-items-center text-secondary">
                <div
                  className="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                ></div>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                {/* 控制編輯資料按鈕 */}
                <button
                  onClick={handleShow}
                  className={`${styles["btn"]} btn btn-outline-primary rounded-pill `}
                >
                  編輯個人資料
                </button>
                {/* 編輯資料彈跳視窗 */}
                <Modal
                  size="lg"
                  show={show}
                  keyboard={false}
                  fullscreen={fullscreen}
                  onHide={handleClose}
                  backdrop="static"
                >
                  <form action="" onSubmit={handleSubmit}>
                    <Modal.Header bsPrefix={`${styles["modal-header"]}`}>
                      <button
                        className="btn me-3 d-sm-none"
                        onClick={handleClose}
                      >
                        <ArrowLeftIcon />
                      </button>
                      <CloseButton
                        className={`${styles["btn-close"]} d-none d-sm-block ${
                          isUpload && "disabled"
                        }`}
                        onClick={handleClose}
                        aria-label="Close"
                      />

                      <h5>編輯個人資料</h5>
                      {isUpload ? (
                        <button
                          className="btn btn-primary text-white rounded-pill ms-auto"
                          type="button"
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Loading...
                        </button>
                      ) : (
                        <input
                          type="submit"
                          className="btn btn-primary text-white rounded-pill ms-auto"
                          value="儲存"
                        />
                      )}
                    </Modal.Header>
                    <Modal.Body className={`${styles["modal-body"]}`}>
                      <div className={`${styles["bg-edit"]}`}>
                        <img
                          className={`${styles["bg"]}`}
                          src={
                            imageView?.cover ||
                            formData?.cover ||
                            "https://fakeimg.pl/639x200/"
                          }
                          alt="user-edit-bg"
                        />

                        <div className={`${styles["bg-edit-button"]}`}>
                          <label htmlFor="bg-edit" className="btn">
                            <CameraIcon />
                          </label>
                          <input
                            onChange={handleCover}
                            className="d-none"
                            type="file"
                            accept="image/png,jpg,jpeg"
                            name="bg-edit"
                            id="bg-edit"
                          />
                          <button className="btn">
                            <CrossIcon />
                          </button>
                        </div>
                      </div>
                      <label
                        htmlFor="avatar"
                        className={`${styles["user-avatar"]} ${styles["user-avatar-edit"]} p-3`}
                      >
                        <img
                          className={`${styles["avatar"]}`}
                          src={
                            imageView?.avatar ||
                            formData?.avatar ||
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          }
                          alt="user-avatar"
                          width={140}
                          height={140}
                        />
                        <div className={`${styles["avatar-edit-icon"]}`}>
                          <CameraIcon />
                        </div>
                        <input
                          onChange={handleAvatar}
                          type="file"
                          accept="image/png,jpg,jpeg"
                          className="d-none"
                          name="avatar"
                          id="avatar"
                        />
                      </label>
                      <div className="p-3 mt-5">
                        <AuthInput
                          onChange={handleName}
                          defaultValue={formData?.name}
                          label="名稱"
                          placeholder="請輸入名稱"
                          error={errorMessage.userName}
                        />
                        <div
                          className={`${styles["input-style"]} d-flex flex-column`}
                        >
                          <label htmlFor="userIntroduction">自我介紹</label>
                          <textarea
                            onChange={handleIntroduction}
                            style={{
                              resize: "none",
                              outline: "none",
                            }}
                            maxLength={160}
                            name="userIntroduction"
                            id="userIntroduction"
                            defaultValue={formData?.introduction}
                            cols="30"
                            rows="5"
                          ></textarea>
                          <p className={styles["count"]}>{count}/160</p>
                        </div>
                      </div>
                    </Modal.Body>
                  </form>
                </Modal>
              </div>
            )}
          </div>
          <div className={`${styles["info"]}`}>
            <div className={`${styles["info-content"]}`}>
              <div>
                <strong>{formData?.name || "無讀取資料"}</strong>
                <p className="text-secondary mb-2">
                  {userData?.account ? `@${userData?.account}` : "無讀取資料"}
                </p>

                <p className="mb-2">
                  {formData?.introduction || "請設置自我介紹"}
                </p>
                <div className="d-flex gap-4">
                  {/* 點擊 跟隨中 Link to follower 頁面 */}
                  <p>
                    {userData?.followingCount || 0} 個
                    <span className="text-secondary">跟隨中</span>
                  </p>
                  {/*點擊 跟隨中 Link to following 頁面  */}
                  <p>
                    {userData?.followerCount || 0} 位
                    <span className="text-secondary">跟隨者</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePart;
