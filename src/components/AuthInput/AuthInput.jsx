import { useState } from "react";
import styles from "./AuthInput.module.scss";

const AuthInput = ({ type, label, value, onChange, maxChar, error }) => {
  const [textCount, setTextCount] = useState(0);

  return (
    <div className={`${styles["area"]} ${error ? styles["error"] : ""}`}>
      <div className={`${styles["AuthInput"]}`}>
        <label htmlFor={label || "userId"}>{label ? label : "帳號"}</label>
        <input
          id={label || "userId"}
          value={value || ""}
          type={type ? type : "text"}
          maxLength={maxChar ? maxChar : 50}
          onChange={(e) => {
            setTextCount(e.target.value.length);
            return onChange?.(e.target.value);
          }}
        />
        <div className={`${styles["footer"]}`}>
          <p className="mb-0">{error ? error : " "}</p>
          <p className="mb-0">
            {textCount}/ {maxChar ? maxChar : 50}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthInput;
