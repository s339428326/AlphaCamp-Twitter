import axios from "axios";

import Swal from "sweetalert2";
const AUTH_URL = "https://rocky-sands-70657.herokuapp.com/api/";

export const login = async ({ account, password }) => {
  console.log({ account, password });
  try {
    const { data } = await axios.post(AUTH_URL + "signin", {
      account,
      password,
    });
    const { token } = data.data;
    console.log("[登入成功]", data);
    if (token) return { success: true, ...data };
    return data;
  } catch (error) {
    const errorMessage = () => {
      if (error.response.data.message === "This account has not registered.") {
        return "帳號不存在";
      }
      if (
        error.response.data.message === "Account or password is not correct."
      ) {
        return "輸入密碼不正確";
      }

      if (error.response.data.message === "Permission denied.") {
        return "管理員登入前台";
      }
    };

    Swal.fire({
      position: "top",
      title: "登入失敗！",
      text: errorMessage(),
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
    console.error(error);
    console.log("[登入失敗]", error.response.data.message);
    return { status: false };
  }
};

export const register = async ({
  account,
  name,
  email,
  password,
  checkPassword,
}) => {
  try {
    const { data } = await axios.post(AUTH_URL + "users", {
      account,
      name,
      email,
      password,
      checkPassword,
    });

    const { token } = data.data;
    if (token) return { success: true, ...data };
    return data;
  } catch (error) {
    const errorText = () => {
      if (error.response.data.message === "All field are required!") {
        return "未填妥所有欄位";
      }
      if (
        error.response.data.message ===
        "Password and confirmPassword do not match."
      ) {
        return "密碼與確認密碼不相符";
      }
      if (error.response.data.message === "Email input is invalid!") {
        return "email格式錯誤";
      }
      if (
        error.response.data.message ===
        "Name field has max length of 50 characters."
      ) {
        return "名稱超過字數限制";
      }
      if (error.response.data.message === "Account already exists!") {
        return "帳號已註冊";
      }
      if (error.response.data.message === "Email already exists!") {
        return "email已註冊";
      }
    };

    console.error(error);
    console.log("[註冊失敗]: ", errorText);
    Swal.fire({
      position: "top",
      title: "註冊失敗！",
      text: errorText(),
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
    return { status: false };
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(AUTH_URL + "auth/test-token", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });

    return response.status;
  } catch (error) {
    console.error(error);
    console.log("[Check Permission Failed]:", error);
  }
};

export const adminLogin = async ({ account, password }) => {
  console.log({ account, password });
  try {
    const { data } = await axios.post(AUTH_URL + "admin/signin", {
      account,
      password,
    });
    const { token } = data.data;
    console.log("[登入成功]", data);
    if (token) return { success: true, ...data };
    return data;
  } catch (error) {
    console.error(error);
    console.log("[登入失敗]", error.response.data.message);
    return { status: false };
  }
};
