import { createContext, useState, useEffect, useContext } from "react";
import { login } from "../apis/.auth";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null,
};

//export useAuth
const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);

//
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setPayload(null);
        return;
      }
      //checkPremisses
      const isValid = token;
      //   console.log("Token驗證", Boolean(isValid));
      if (isValid) {
        setIsAuthenticated(true);
        const tempPayload = jwt_decode(token);
        setPayload(tempPayload);
      } else {
        setIsAuthenticated(false);
        setPayload(null);
      }
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
          localStorage.removeItem("token");
          setPayload(null);
          setIsAuthenticated(false);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
