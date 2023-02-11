import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./styles/scss/style.css";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

declare global {
  interface Window {
    Pusher: any;
    Echo: any;
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
