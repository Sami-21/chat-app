import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
export const ProtectedRoute = ({ children }: any) => {
  const { token }: any = useAppSelector((state) => state);
  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
