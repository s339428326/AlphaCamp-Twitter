import styles from "./MainReplyModal.module.scss";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

import { useAuth } from "../../contexts/AuthContext";

import React, { useState } from "react";

import { postReply } from "../../apis/tweets";

import { Toast } from "../../helpers/sweetalert";

import { useTweetStatus } from "../../contexts/TweetStatusContext";

export const MessageIcon = ({ height, width }) => {
  return (
    <div className={styles.messageIcon}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.425 0.802509L10.24 0.790009H10.2375C4.77005 0.790009 0.487549 5.07376 0.487549 10.5425C0.487549 15.665 4.47005 19.55 9.8188 19.755V24.54C9.8188 24.675 9.8738 24.8975 9.9688 25.0438C10.1463 25.325 10.4488 25.4775 10.7588 25.4775C10.9313 25.4775 11.105 25.43 11.2613 25.33C11.5913 25.12 19.3525 20.155 21.3713 18.4475C23.7488 16.435 25.1713 13.485 25.175 10.5575V10.5363C25.1675 5.07751 20.8875 0.802508 15.425 0.801258V0.802509ZM20.1588 17.0175C18.7413 18.2175 14.0813 21.2738 11.6938 22.8213V18.8375C11.6938 18.32 11.275 17.9 10.7563 17.9H10.2613C5.6863 17.9 2.3638 14.805 2.3638 10.5425C2.3638 6.12501 5.8238 2.66501 10.2388 2.66501L15.4225 2.67751H15.425C19.84 2.67751 23.3 6.13501 23.3025 10.5475C23.2988 12.935 22.125 15.3525 20.16 17.0175H20.1588Z"
          fill="#6C757D"
        />
      </svg>
    </div>
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

const MainReplyModal = ({ width, height, data, setTweetReplyCount }) => {
  const localAvatar = localStorage.getItem("avatar");
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const { avatar } = useAuth();
  const [comment, setComment] = useState("");
  const { setIsReplyTweetUpdate } = useTweetStatus();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tweetId = data?.replyPageTweetId || data?.tweetId;

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFullscreen("sm-down");
    setShow(true);
  };

  const showText = (e) => {
    setWordCount(e.target.value.length);
    setComment(e.target.value);
  };
  const handleClick = () => {
    setComment("");
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const postStatus = await postReply(tweetId, comment.trim());
      if (postStatus && postStatus.status === 200) {
        setComment("");
        setShow(false);
        setIsReplyTweetUpdate(true);
        if (setTweetReplyCount) {
          setTweetReplyCount((prevValue) => prevValue + 1);
        }
        Toast.fire({
          icon: "success",
          title: "回覆成功！",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "推文發送失敗！",
        });
      }
    } catch (error) {
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "回覆失敗！",
      });
    }

    setIsSubmitting(false);
  };
  return (
    <>
      <button onClick={handleShow} className={styles.messageBtn}>
        <MessageIcon width={width} height={height} />
      </button>
      <Modal
        size="lg"
        show={show}
        fullscreen={fullscreen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className={styles.replyModalContainer}>
          <Modal.Header bsPrefix={`${styles["modal-header"]}`}>
            <button className="btn me-3 d-sm-none" onClick={handleClick}>
              <ArrowLeftIcon />
            </button>
            <CloseButton
              className="d-none d-sm-block"
              onClick={handleClick}
              aria-label="Close"
            />
          </Modal.Header>
          <Modal.Body className={styles.body}>
            {/* 推文 */}
            <div className={styles.replyModalTweet}>
              {/* 圖片 */}
              <div className={styles.replyModalAvatarContainer}>
                <img
                  className="rounded-circle"
                  src={
                    data?.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="user-avatar"
                  width={50}
                  height={50}
                />
                <span className={styles.dash}></span>
              </div>
              {/* 內容 */}
              <div className={styles.tweetInfo}>
                <div className={styles.infoTop}>
                  <span className={styles.infoTopPrime}>{data?.name}</span>
                  <span className={styles.infoTopSec}>@{data?.account}</span>
                  <span className={styles.infoTopSec}>．{data?.createdAt}</span>
                </div>
                <div className={styles.infoContent}>{data?.description}</div>
                <div className={styles.tweetReplyTo}>
                  <span className={styles.tweetReplyToSec}>回覆給 </span>
                  <span className={styles.tweetReplyToPrime}>
                    @{data?.account}
                  </span>
                </div>
              </div>
            </div>
            {/* 回覆推文 */}
            <form className={styles.tweetInput}>
              <div className={styles.inputContainer}>
                <div className={styles.inputAvatar}>
                  <img
                    className="rounded-circle"
                    src={
                      (localAvatar === "undefined" &&
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png") ||
                      avatar ||
                      localAvatar ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="user-avatar"
                    width={50}
                    height={50}
                  />
                </div>
                {/* 這裡沒有label 留下id作用 */}
                <textarea
                  maxLength="141"
                  rows={4}
                  cols={10}
                  id="tweetContent"
                  className={styles.inputContent}
                  name="description"
                  type="text"
                  onChange={showText}
                  placeholder="推你的回覆"
                ></textarea>
              </div>
              <div
                className={`${styles.inputWarning} d-flex align-items-center justify-content-end gap-4`}
              >
                {(wordCount === 0 || comment.trim().length === 0) && (
                  <span>內容不可空白</span>
                )}
                {wordCount === 141 && <span>字數不可以超過140字</span>}
                <button
                  className={`btn btn-primary text-white rounded-pill ${
                    isSubmitting ? "disabled" : ""
                  }`}
                  disabled={
                    wordCount === 0 ||
                    wordCount === 141 ||
                    isSubmitting ||
                    comment.trim().length === 0
                  }
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-grow spinner-grow-sm btn-primary rounded-pill"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Submitting...
                    </>
                  ) : (
                    "回覆"
                  )}
                </button>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default MainReplyModal;
