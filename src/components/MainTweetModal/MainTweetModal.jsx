import styles from "./MainTweetModal.module.scss";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import React, { useState } from "react";
import { postTweet } from "../../apis/tweets";
import { Toast } from "../../helpers/sweetalert";
import { useTweetStatus } from "../../contexts/TweetStatusContext";
import { useAuth } from "../../contexts/AuthContext";

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

const MainTweetModal = ({ element }) => {
  const localAvatar = localStorage.getItem("avatar");
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const { avatar } = useAuth();
  const [description, setDescription] = useState("");
  const { setIsGlobalTweetUpdate, setIsUserTweetUpdate } = useTweetStatus();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFullscreen("sm-down");
    setShow(true);
  };
  const showText = (e) => {
    setWordCount(e.target.value.length);
    setDescription(e.target.value);
  };
  const handleClick = () => {
    setDescription("");
    setShow(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const postStatus = await postTweet(description.trim());
      if (postStatus && postStatus === "success") {
        setDescription("");
        setShow(false);
        setIsGlobalTweetUpdate(true);
        setIsUserTweetUpdate(true);
        Toast.fire({
          icon: "success",
          title: "?????????????????????",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "?????????????????????",
        });
      }
    } catch (error) {
      console.error(error);
      Toast.fire({
        icon: "error",
        title: "?????????????????????",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {React.cloneElement(element, { onClick: handleShow })}
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
            <div className={`${styles.inputWarning} d-flex d-sm-none ms-auto`}>
              {(wordCount === 0 || description.trim().length === 0) && (
                <span>??????????????????</span>
              )}
              {wordCount === 141 && <span>?????????????????????140???</span>}
              <button
                className={`btn btn-primary text-white rounded-pill ${
                  isSubmitting ? "disabled" : ""
                }`}
                disabled={
                  wordCount === 0 ||
                  wordCount === 141 ||
                  isSubmitting ||
                  description.trim().length === 0
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
                  "??????"
                )}
              </button>
            </div>
          </Modal.Header>
          <Modal.Body className={styles.body}>
            {/* ???????????? */}
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
                {/* ????????????label ??????id?????? */}
                <textarea
                  maxLength="141"
                  rows={4}
                  cols={10}
                  id="tweetContent"
                  className={styles.inputContent}
                  value={description}
                  type="text"
                  onChange={showText}
                  placeholder="?????????????????????"
                ></textarea>
              </div>
              <div className={`${styles.inputWarning} d-none d-sm-flex`}>
                {(wordCount === 0 || description.trim().length === 0) && (
                  <span>??????????????????</span>
                )}
                {wordCount === 141 && <span>?????????????????????140???</span>}
                <button
                  className={`btn btn-primary text-white rounded-pill ${
                    isSubmitting ? "disabled" : ""
                  }`}
                  disabled={
                    wordCount === 0 ||
                    wordCount === 141 ||
                    isSubmitting ||
                    description.trim().length === 0
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
                    "??????"
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

export default MainTweetModal;
