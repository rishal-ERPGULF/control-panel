import RootLayout from "@/layout/RootLayout";
import Login from "@/screens/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <div>Home</div> },
      { path: "/about", element: <div>About</div> },
      { path: "/users", element: <div>Users</div> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
