import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./components/Login";
import Register from "./components/Register.tsx";
import Home from "./components/Home.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { UserAuthContextProvider } from "./context/UserAuthContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
