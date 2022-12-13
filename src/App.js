// import './App.css';
import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  UserLoginPage,
  RegisterPage,
  AdminPage,
  AdminMainPage,
  AdminUserPage,
  NotFoundPage,
  UserFollowPage,
  UserMainPage,
  UserMainReplyPage,
} from "./pages";
import UserFollowPart from "./components/UserFollowPart/UserFollowPart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin_main" element={<AdminMainPage />} />
          <Route path="/admin_users" element={<AdminUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/user" element={<UserMainPage />} />
          <Route path="/user/reply" element={<UserMainReplyPage />} />
          <Route path="/userfollow" element={<UserFollowPage />}>
            <Route index element={<UserFollowPart />} />
            <Route path="follower" element={<UserFollowPart />} />
            <Route path="following" element={<UserFollowPart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
