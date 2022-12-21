//Component
import AuthInput from "../AuthInput/AuthInput";
import styles from "./Setting.module.scss";
//React
import { useState } from "react";
import { putUserAccountSetting } from "../../apis/userData";
//Router
import { useLocation } from "react-router-dom";
//Plug-in
import Swal from "sweetalert2";
//Regex
import { validAccount, validEmail, validPassword } from "../../helpers/regex";

export default function Setting() {
  const [setting, setSetting] = useState({
    account: "",
    name: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const url = useLocation().pathname.split("/");
  const urlUserId = url[1];

  const handleSave = async (e) => {
    e.preventDefault();
    // block blank input
    if (
      !(
        setting.account &&
        setting.name &&
        setting.email &&
        setting.password &&
        setting.checkPassword
      )
    ) {
      Swal.fire({
        position: "top",
        title: "修改失敗！",
        text: "不可有空白欄位",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    // Regex
    if (
      !(
        setting.account.match(validAccount) &&
        setting.password.match(validPassword)
      )
    ) {
      Swal.fire({
        position: "top",
        title: "修改失敗！",
        text: "帳號或密碼不可含有特殊字元",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    if (!setting.email.match(validEmail)) {
      Swal.fire({
        position: "top",
        title: "修改失敗！",
        text: "Email格式不正確",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    // API
    try {
      const success = await putUserAccountSetting({
        urlUserId,
        account: setting["account"],
        name: setting["name"],
        email: setting["email"],
        password: setting["password"],
        checkPassword: setting["checkPassword"],
      });
      if (success) {
        Swal.fire({
          position: "top",
          title: "修改成功！",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleInput = (keyName) => (currentValue) => {
    setSetting({
      ...setting,
      [keyName]: currentValue,
    });
  };

  return (
    <form
      action=""
      className={`${styles["vh-100"]} p-4 border-start border-end`}
    >
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
        value={setting.checkPassword}
        onChange={handleInput("checkPassword")}
        placeholder="請再次輸入密碼"
      />
      <div className="mt-3 d-flex justify-content-end">
        <button
          onClick={handleSave}
          className="btn btn-primary text-white rounded-pill"
        >
          儲存
        </button>
      </div>
    </form>
  );
}
