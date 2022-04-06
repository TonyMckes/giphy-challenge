import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "routes/Details";
import Home from "routes/Home";
import SearchResults from "routes/SearchResults";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="gallery/:id" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
