//Component
import AuthInput from "../AuthInput/AuthInput";
import styles from "./Setting.module.scss";
//React
import { useState } from "react";
import { putUserAccountSetting } from "../../apis/userData";
//Router
import { useLocation, useNavigate } from "react-router-dom";
//Plug-in
import Swal from "sweetalert2";
//Regex
import { validAccount, validEmail, validPassword } from "../../helpers/regex";
//Context
import { useAuth } from "../../contexts/AuthContext";

export const LogOutIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H8C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17C9 16.7348 8.89464 16.4804 8.70711 16.2929C8.51957 16.1054 8.26522 16 8 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H8C8.26522 2 8.51957 1.89464 8.70711 1.70711C8.89464 1.51957 9 1.26522 9 1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0H3Z"
        fill="#44444F"
      />
      <path
        d="M12.293 4.29303C12.4805 4.10556 12.7348 4.00024 13 4.00024C13.2652 4.00024 13.5195 4.10556 13.707 4.29303L17.707 8.29303C17.8945 8.48056 17.9998 8.73487 17.9998 9.00003C17.9998 9.26519 17.8945 9.5195 17.707 9.70703L13.707 13.707C13.5184 13.8892 13.2658 13.99 13.0036 13.9877C12.7414 13.9854 12.4906 13.8803 12.3052 13.6948C12.1198 13.5094 12.0146 13.2586 12.0123 12.9964C12.01 12.7342 12.1108 12.4816 12.293 12.293L14.586 10H7C6.73478 10 6.48043 9.89467 6.29289 9.70714C6.10536 9.5196 6 9.26525 6 9.00003C6 8.73481 6.10536 8.48046 6.29289 8.29292C6.48043 8.10539 6.73478 8.00003 7 8.00003H14.586L12.293 5.70703C12.1055 5.5195 12.0002 5.26519 12.0002 5.00003C12.0002 4.73487 12.1055 4.48056 12.293 4.29303Z"
        fill="#44444F"
      />
    </svg>
  );
};

export default function Setting() {
  const { currentMember, logout, setUserName } = useAuth();
  const navigate = useNavigate();
  const [setting, setSetting] = useState({
    account: `${currentMember.account}`,
    name: `${currentMember.name}`,
    email: `${currentMember.email}`,
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
        navigate(`/${currentMember.id}/profile`);
      }

      //fix
      setUserName(setting["name"]);
      localStorage.getItem("name", setting["name"]);
      navigate(`/${currentMember.id}/profile`);

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
        defaultCount={currentMember.account.length}
        defaultValue={currentMember.account}
        value={setting.account}
        autoComplete="username"
        onChange={handleInput("account")}
        placeholder="請輸入帳號"
        error={
          setting.account.match(validAccount) ? "" : "帳號不可含有特殊字元"
        }
      />
      <AuthInput
        defaultCount={currentMember.name.length}
        defaultValue={currentMember.name}
        label="名稱"
        value={setting.name}
        autoComplete="off"
        onChange={handleInput("name")}
        placeholder="請輸入名稱"
      />
      <AuthInput
        defaultCount={currentMember.email.length}
        defaultValue={currentMember.email}
        label="Email"
        value={setting.email}
        autoComplete="on"
        onChange={handleInput("email")}
        placeholder="請輸入email"
        error={setting.email.match(validEmail) ? "" : "email格式不正確"}
      />
      <AuthInput
        label="密碼"
        type="password"
        autoComplete="current-password"
        value={setting.password}
        onChange={handleInput("password")}
        placeholder="請輸入密碼"
        error={
          setting.password.match(validPassword) ? "" : "密碼不可含有特殊字元"
        }
      />
      <AuthInput
        label="密碼確認"
        type="password"
        autoComplete="off"
        value={setting.checkPassword}
        onChange={handleInput("checkPassword")}
        placeholder="請再次輸入密碼"
        error={
          setting.checkPassword.match(validPassword)
            ? ""
            : "密碼不可含有特殊字元"
        }
      />
      <div className="mt-3 d-flex justify-content-end gap-4">
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="btn d-flex align-items-center gap-2 d-block d-md-none"
        >
          <LogOutIcon />
          <span>登出</span>
        </button>
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
