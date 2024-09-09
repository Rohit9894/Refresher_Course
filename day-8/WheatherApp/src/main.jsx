import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
