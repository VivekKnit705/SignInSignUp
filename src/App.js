import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import ResetPassword from "./Pages/ResetPassword";
import Header from "./DashBoard/Header";
import Profile from "./DashBoard/Profile";
import Users from "./DashBoard/Users";
import Home from "./DashBoard/Home";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/header" element={<Header />} />
          <Route path="/profilepage" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      {/* <Header /> */}
    </ThemeProvider>

  );
};
export default App;
