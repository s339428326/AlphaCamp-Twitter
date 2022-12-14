//Component
import AuthInput from "../AuthInput/AuthInput";
import styles from "./Setting.module.scss";
//React
import { useState } from "react";

export default function Setting() {
  const [setting, setSetting] = useState({
    account: "",
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setSetting({
      ...setting,
      [keyName]: currentValue,
    });
  };
  return (
    <form action="" className={styles.settingForm}>
      <AuthInput
        value={setting.account}
        autoComplete="username"
        onChange={handleInput("account")}
        placeholder="請輸入帳號"
      />
      <AuthInput
        label="名稱"
        value={setting.name}
        autoComplete="off"
        onChange={handleInput("name")}
        placeholder="請輸入名稱"
      />
      <AuthInput
        label="Email"
        value={setting.email}
        autoComplete="on"
        onChange={handleInput("email")}
        placeholder="請輸入信箱"
      />
      <AuthInput
        label="密碼"
        type="password"
        autoComplete="current-password"
        value={setting.password}
        onChange={handleInput("password")}
        placeholder="請輸入密碼"
      />
      <AuthInput
        label="密碼確認"
        type="password"
        autoComplete="off"
        value={setting.passwordCheck}
        onChange={handleInput("passwordCheck")}
        placeholder="請再次輸入密碼"
      />
      <div className="mt-3">
        <button
          className={`btn btn-primary w-25 text-white rounded-pill ${styles.saveButton}`}
        >
          儲存
        </button>
      </div>
    </form>
  );
}
