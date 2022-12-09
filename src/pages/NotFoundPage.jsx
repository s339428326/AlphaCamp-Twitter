//import { Link } from "react-router-dom";
import styles from "../styles/NotFoundPage.module.scss"

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPageContainer}>
      <h1> Sorry, the page is not exist!</h1>
      <p>Please <b className={styles.focus}>login </b>to continue!</p>
    </div>
  )
}

export default NotFoundPage;