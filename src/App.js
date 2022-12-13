// import './App.css';
import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  UserLoginPage,
  RegisterPage,
  AdminPage,
  NotFoundPage,
  UserFollowPage,
  UserMainPage,
  UserMainReplyPage,
  UserProfilePage,
} from "./pages";
import UserFollowPart from "./components/UserFollowPart/UserFollowPart";
import UserProfileTweet from "./components/UserProfileTweet/UserProfileTweet";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
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
            <Route path="reply" element={<UserProfileTweet router="reply" />} />
            <Route path="like" element={<UserProfileTweet router="like" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
