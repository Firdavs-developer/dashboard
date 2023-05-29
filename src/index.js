import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/index";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ModeProvider from "./context/mode/mode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ProviderToken } from "./context/context";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ProviderToken>
        <App />
      </ProviderToken>
    </QueryClientProvider>
    <ToastContainer />

  </BrowserRouter>
  // </React.StrictMode>
);
