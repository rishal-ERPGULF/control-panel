import RootLayout from "@/layout/RootLayout";
import Login from "@/screens/Login";
import { createBrowserRouter } from "react-router-dom";
import { LoginRoute, ProtectedRoute } from "./Auth";

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
      { path: "/about", element: <div>About</div> },
      { path: "/users", element: <div>Users</div> },
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
