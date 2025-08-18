import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";
import LayerProvider from "./Components/context/Menu-Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayerProvider>
        <App />
      </LayerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
