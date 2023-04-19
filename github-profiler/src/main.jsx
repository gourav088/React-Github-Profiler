import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import RepoDetail from "./components/RepoDetails";
import Followers from "./components/Followers";
import Following from "./components/Following";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/followers/:gitcheck",
    element: <Followers />,
  },
  {
    path: "/following/:gitcheck",
    element: <Following />,
  },
  {
    path: "/profiles/:id",
    caseSensitive: false,
    element: <Profile />,
  },
  {
    path: "/reposDetail/:ids/:gitcheck",
    element: <RepoDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
