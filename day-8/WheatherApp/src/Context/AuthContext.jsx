import { createContext, useContext, useState } from "react";

const AuthConext = createContext(null);
function AuthConextProvider({ children }) {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });
  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token,
    });
  }
  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  }

  return (
    <AuthConext.Provider value={{ state, handleLogin, handleLogout }}>
      {children}
    </AuthConext.Provider>
  );
}

export default AuthConextProvider;
export function AuthState() {
  return useContext(AuthConext);
}
