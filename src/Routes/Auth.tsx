import { Navigate } from "react-router-dom";

interface Prop {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: Prop): React.ReactNode => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return children;
  }
  return <Navigate to="/login" />;
};

export const LoginRoute = ({ children }: Prop): React.ReactNode => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return children;
};
