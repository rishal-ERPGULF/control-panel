import RootLayout from "@/layout/RootLayout";
import Login from "@/screens/Login";
import { createBrowserRouter } from "react-router-dom";
import { LoginRoute, ProtectedRoute } from "./Auth";
import UserManage from "@/screens/UserManage";
import UserRegister from "@/screens/UserRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <div>Home</div> },
      {
        path: "/users",
        children: [
          { index: true, element: <UserManage /> },
          { path: "new", element: <UserRegister /> },
        ],
      },
      { path: "/bids", element: <div>bids</div> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
  {
    path: "/login",
    element: (
      <LoginRoute>
        <Login />
      </LoginRoute>
    ),
  },
]);

export default router;
