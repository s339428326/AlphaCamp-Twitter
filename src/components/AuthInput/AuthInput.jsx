import { useState } from "react";
import styles from "./AuthInput.module.scss";

/*
props
type (string)
label(string)
placeholder (string)
defaultValue (string)
onChange(function)
maxChar(Number or String) => 設定最多輸入文字數量
autocomplete => 爬蟲建議擺放
error(string) => 輸入字串長度大於0會啟用錯誤樣式
*/

/*
  範例使用handler 在元件外層取得input value：
  //hook設定
  const [login, setLogin] = useState({
    account: "",
    password: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setLogin({
      ...login,
      [keyName]: currentValue,
    });
  };

  const handleInput = (keyName) => (currentValue) => {
    setAdminLogin({
      ...adminLogin,
      [keyName]: currentValue,
    });
  };
   return(
    <>
    <AuthInput value={adminLogin.adminId} onChange={handleInput("adminId")} />
    <AuthInput label="密碼" type="password" value={adminLogin.adminPassword} onChange={handleInput("adminPassword")}/>
    </>
    )
*/

const AuthInput = ({
  type,
  label,
  placeholder,
  defaultValue,
  onChange,
  maxChar,
  autoComplete,
  error,
}) => {
  const [textCount, setTextCount] = useState(0);

  return (
    <div className={`${styles["area"]} ${error ? styles["error"] : ""}`}>
      <div className={`${styles["AuthInput"]}`}>
        <label htmlFor={label || "account"}>{label ? label : "帳號"}</label>
        <input
          id={label || "account"}
          defaultValue={defaultValue || ""}
          type={type ? type : "text"}
          placeholder={placeholder}
          maxLength={maxChar ? maxChar : 50}
          // pattern={type === "email" && ".+@globex.com"}
          onChange={(e) => {
            setTextCount(e.target.value.length);
            return onChange?.(e.target.value);
          }}
          autoComplete={autoComplete}
          required
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
