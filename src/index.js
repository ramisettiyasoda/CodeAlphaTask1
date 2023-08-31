import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

import { BrowserRouter } from 'react-router-dom';

/*const PrintName = () => {
  return <h1>hello sravani keep going...</h1>;
}*/
const root= ReactDom.createRoot(document.getElementById("root"));
//setInterval(() => {
root.render(
  <BrowserRouter> <App /></BrowserRouter>
);
//}, 1000)





