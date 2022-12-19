import { createContext, useState, useEffect, useContext } from "react";
import { login, checkPermission, adminLogin, register } from "../apis/auth";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
  adminLogin: null,
};

//export useAuth
const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);

//
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        setIsLoading(false);
        return;
      }
      //checkPermission
      const isValid = await checkPermission(token);
      //   console.log("Token驗證", Boolean(isValid));
      if (isValid) {
        setIsAuthenticated(true);
        const tempPayload = jwt_decode(token);
        setPayload(tempPayload);
        //儲存個人資料
        const check = localStorage.getItem("name");
        //只可以賦值一次
        if (check === null) {
          localStorage.setItem("name", tempPayload.name);
          localStorage.setItem("avatar", tempPayload.avatar);
          localStorage.setItem("cover", tempPayload.cover);
          localStorage.setItem("introduction", tempPayload.introduction);
          localStorage.setItem("id", tempPayload.id);
        }
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
      setIsLoading(false);
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember: payload && {
          //   id: payload.id,
          //   name: payload.name,
          ...payload,
        },
        register: async (registerData) => {
          const { status, data } = await register({
            account: registerData.account,
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
            checkPassword: registerData.checkPassword,
          });
          if (data) {
            const tempPayload = jwt_decode(data.token);
            if (tempPayload) {
              setPayload(tempPayload);
              setIsAuthenticated(true);
              localStorage.setItem("token", data.token);
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
          }

          return status;
        },
        login: async (loginData) => {
          const { status, data } = await login({
            account: loginData.account,
            password: loginData.password,
          });
          if (data) {
            const tempPayload = jwt_decode(data.token);
            if (tempPayload) {
              setPayload(tempPayload);
              setIsAuthenticated(true);
              localStorage.setItem("token", data.token);
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
          }

          return status;
        },
        logout: () => {
          localStorage.clear();
          setPayload(null);
          setIsAuthenticated(false);
        },

        adminLogin: async (loginData) => {
          const { status, data } = await adminLogin({
            account: loginData.account,
            password: loginData.password,
          });
          if (data) {
            const tempPayload = jwt_decode(data.token);
            if (tempPayload) {
              setPayload(tempPayload);
              setIsAuthenticated(true);
              localStorage.setItem("token", data.token);
            } else {
              setPayload(null);
              setIsAuthenticated(false);
            }
          }

          return status;
        },
      }}
    >
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
