import Anonymous from "components/Anonymous";
import RequireAuth from "components/RequireAuth";
import AuthProvider from "context/AuthProvider";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "routes/Details";
import Home from "routes/Home";
import Login from "routes/Login";
import SearchResults from "routes/SearchResults";
import SignUp from "routes/SignUp";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Routes can be moved to the App component is things become more complex (to avoid nesting).
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route element={<RequireAuth />}>
              <Route path="search" element={<SearchResults />} />
              <Route path="gallery/:id" element={<Details />} />
            </Route>

            <Route element={<Anonymous />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<SignUp />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
