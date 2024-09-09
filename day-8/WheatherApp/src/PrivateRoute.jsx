import { Navigate, useNavigate } from "react-router-dom";
import { AuthState } from "./Context/AuthContext";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { state } = AuthState();

  console.log(state);

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
