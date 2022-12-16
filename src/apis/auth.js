import axios from "axios";

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

    const { authToken } = data;
    if (authToken) return { success: true, ...data };
    return data;
  } catch (error) {
    console.error("[Register Failed]: ", error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${AUTH_URL}/auth/test-token`, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });

    return response.status;
  } catch (error) {
    console.error("[Check Permission Failed]:", error);
  }
};

export const adminLogin = async ({ account, password }) => {
  console.log({ account, password });
  try {
    const { data } = await axios.post(`${AUTH_URL}/admin/signin`, {
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
