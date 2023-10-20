import RootLayout from "@/layout/RootLayout";
import Login from "@/screens/Login";
import { createBrowserRouter } from "react-router-dom";
import { LoginRoute, ProtectedRoute } from "./Auth";
import UserManage from "@/screens/UserManage";
import UserRegister from "@/screens/UserRegister";
import UserEdit from "@/screens/UserEdit";
import City from "@/screens/City";
import CityAdd from "@/screens/CityAdd";
import CityEdit from "@/screens/CityEdit";

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
          { path: "edit/:id", element: <UserEdit /> },
        ],
      },
      { path: "/bids", element: <div>bids</div> },
      {
        path: "/city",
        children: [
          { index: true, element: <City /> },
          { path: "new", element: <CityAdd /> },
          { path: "edit/:id", element: <CityEdit /> },
        ],
      },
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
