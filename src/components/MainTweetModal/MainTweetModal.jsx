import styles from "./MainTweetModal.module.scss";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import React, { useState } from "react";

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

const MainTweetModal = ({ user, element }) => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFullscreen("sm-down");
    setShow(true);
  };
  const showText = (e) => {
    setWordCount(e.target.value.length);
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
            <button
              className="btn me-3 d-sm-none"
              onClick={() => setShow(false)}
            >
              <ArrowLeftIcon />
            </button>
            <CloseButton
              className="d-none d-sm-block"
              onClick={() => setShow(false)}
              aria-label="Close"
            />
          </Modal.Header>
          <Modal.Body className={styles.body}>
            {/* 新增推文 */}
            <form className={styles.tweetInput}>
              <div className={styles.inputContainer}>
                <div className={styles.inputAvatar}>
                  <img
                    src={
                      user ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="user-avatar"
                    width={50}
                    height={50}
                  />
                </div>
                {/* 這裡沒有label 留下id作用 */}
                <textarea
                  maxLength="140"
                  rows={4}
                  cols={10}
                  id="tweetContent"
                  className={styles.inputContent}
                  name="description"
                  type="text"
                  onChange={showText}
                  placeholder="有什麼新鮮事？"
                ></textarea>
              </div>
              <div
                className={`${styles.inputWarning} d-flex align-items-center justify-content-end gap-4`}
              >
                {wordCount === 0 && <span>內容不可空白</span>}
                {wordCount === 140 && <span>字數不可以超過140字</span>}
                {wordCount < 140 && wordCount !== 0 && <span></span>}
                <button
                  className="btn btn-primary text-white rounded-pill"
                  disabled={wordCount === 0 ? true : false}
                >
                  推文
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