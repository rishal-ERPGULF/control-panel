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
import Features from "@/screens/Features";
import FeaturesAdd from "@/screens/FeaturesAdd";
import FeaturesEdit from "@/screens/FeaturesEdit";
import UserBids from "@/screens/UserBids";

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
          { path: "bids/:id", element: <UserBids /> },
        ],
      },
      {
        path: "/city",
        children: [
          { index: true, element: <City /> },
          { path: "new", element: <CityAdd /> },
          { path: "edit/:id", element: <CityEdit /> },
        ],
      },
      {
        path: "/features",
        children: [
          { index: true, element: <Features /> },
          {
            path: "new",
            element: <FeaturesAdd />,
          },
          {
            path: "edit/:id",
            element: <FeaturesEdit />,
          },
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
