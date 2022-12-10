// import './App.css';
import "./styles/main.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLoginPage, RegisterPage, AdminPage } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
