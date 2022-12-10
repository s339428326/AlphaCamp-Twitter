import { LogoIcon } from "../Icons/Icons";
import styles from "./Logo.module.scss";

const Logo = ({ title }) => {
  return (
    <div className={`${styles["logo"]}`}>
      <LogoIcon width={40} height={40} />
      <h1>{title ? title : "未輸入"}</h1>
    </div>
  );
};

export default Logo;
