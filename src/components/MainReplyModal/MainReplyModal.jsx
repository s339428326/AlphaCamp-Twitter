import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import style from "./MainReplyModal.module.scss";

//import { Link } from "react-router-dom";

const CrossIcon = () => {
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
        fill="#ff6600"
      />
    </svg>
  );
};

const MessageIcon = () => {
  return (
    <div className={style.messageIcon}>
      <svg
        width="26"
        height="26"
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

const MainReplyModal = ({ avatarImg, inputValue }) => {
  const [show, setShow] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showText = (e) => {
    setWordCount(e.target.value.length);
  };

  // if (wordCount === 0) {
  //   console.log('chec1', wordCount);
  // } else if (wordCount > 140) {
  //   console.log('chec2', wordCount);
  // } else {
  //   console.log('chec3', wordCount);
  // }
  

  return (
    <>
      <button onClick={handleShow} className={style.messageBtn}>
        <MessageIcon />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className={style.replyModalContainer}>
          <Modal.Header className={style.header}>
            <button className={style.closeBtn} onClick={handleClose}>
              <CrossIcon />
            </button>
          </Modal.Header>
          <Modal.Body className={style.body}>
            {/* 推文 */}
            <div className={style.replyModalTweet}>
              {/* 圖片 */}
              <div className={style.replyModalAvatarContainer}>
                <img
                  src={
                    avatarImg ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="user-avatar"
                  width={50}
                  height={50}
                />
                <span className={style.dash}></span>
              </div>
              {/* 內容 */}
              <div className={style.tweetInfo}>
                <div className={style.infoTop}>
                  <span className={style.infoTopPrime}>username</span>
                  <span className={style.infoTopSec}>@test</span>
                  <span className={style.infoTopSec}>．test</span>
                </div>
                <div className={style.infoContent}>
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test test test test test test test test test
                  test test test test
                </div>
                <div className={style.tweetReplyTo}>
                  <span className={style.tweetReplyToSec}>回覆給 </span>
                  <span className={style.tweetReplyToPrime}>@testother</span>
                </div>
              </div>
            </div>
            {/* 回覆推文 */}
            <form className={style.tweetInput}>
              <div className={style.inputContainer}>
                <div className={style.inputAvatar}>
                  <img
                    src={
                      avatarImg ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="user-avatar"
                    width={50}
                    height={50}
                  />
                </div>
                <textarea
                  maxLength="140"
                  rows={4}
                  cols={60}
                  id="tweetContent"
                  className={style.inputContent}
                  name="description"
                  type="text"
                  onChange={showText}
                  placeholder="推你的回覆"
                ></textarea>
              </div>
              <div className={style.tweetInputBtnContainer}>
                <div className={style.inputWarning}>
                  {wordCount === 0 && <span>內容不可空白</span>}
                  {wordCount === 140 && <span>字數不可以超過140字</span>}
                  {wordCount < 140  && wordCount!== 0 && <span></span>}
                </div>
                <button
                  className={style.replyBtn}
                  disabled={wordCount === 0 ? true : false}
                >
                  回覆
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
