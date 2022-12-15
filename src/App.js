// import './App.css';
import "./styles/main.scss";
import { AuthProvider } from "./contexts/AuthContext";
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
  UserProfilePage,
  UserSettingPage,
} from "./pages";

import UserFollowPart from "./components/UserFollowPart/UserFollowPart";
import UserProfileTweet from "./components/UserProfileTweet/UserProfileTweet";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<UserLoginPage />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/:userId/setting" element={<UserSettingPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin_main" element={<AdminMainPage />} />
            <Route path="/admin_users" element={<AdminUserPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/:userId" element={<UserMainPage />} />
            <Route path="/:userId/reply" element={<UserMainReplyPage />} />
            <Route path="/:userId/follow" element={<UserFollowPage />}>
              <Route index element={<UserFollowPart />} />
              <Route path="follower" element={<UserFollowPart />} />
              <Route path="following" element={<UserFollowPart />} />
            </Route>
            <Route path="/:userId/profile" element={<UserProfilePage />}>
              <Route index element={<UserProfileTweet router="" />} />
              <Route
                path="reply"
                element={<UserProfileTweet router="reply" />}
              />
              <Route path="like" element={<UserProfileTweet router="like" />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
