import { createContext, useState, useEffect, useContext } from "react";
import { login, checkPermission, adminLogin, register } from "../apis/auth";
import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { Alert } from "../helpers/sweetalert";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
  adminLogin: null,
  avatar: null,
};

//export useAuth
const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);

//
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(null);
  const [userName, setUserName] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        setIsLoading(false);
        if (pathname !== "/register" && pathname !== "/admin")
          navigate("/login");
        if (
          pathname === "/login" ||
          pathname === "/register" ||
          pathname === "/admin"
        )
          return;
        Alert.fire({ title: "請重新登入", icon: "error" });
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
          setUserName(tempPayload.name);
          if (tempPayload.avatar === null) {
            localStorage.setItem(
              "avatar",
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            );
            setAvatar(tempPayload.avatar);
          } else {
            localStorage.setItem("avatar", tempPayload.avatar);
            setAvatar(tempPayload.avatar);
          }
          if (tempPayload.cover === null) {
            localStorage.setItem("cover", "https://fakeimg.pl/639x200/");
          } else {
            localStorage.setItem("cover", tempPayload.cover);
          }
          localStorage.setItem("introduction", tempPayload.introduction);
          localStorage.setItem("id", tempPayload.id);
        }
      } else {
        setIsAuthenticated(false);
        setPayload(null);
        navigate("/login");
        Alert.fire({ title: "請重新登入", icon: "error" });
      }
      setIsLoading(false);
    };
    checkTokenIsValid();
  }, [pathname, userName, navigate]);

  return (
    <AuthContext.Provider
      value={{
        setIsAuthenticated,
        isAuthenticated,
        userName,
        setUserName,
        avatar,
        setAvatar,
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
