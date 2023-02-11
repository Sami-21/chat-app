import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  // const { user }: any = useAuth();
  // if (!user) {
  //   // user is not authenticated
  //   return <Navigate to="/" />;
  // }
  return children;
};
