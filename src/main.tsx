import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./style/index.css";
import "slick-carousel/slick/slick.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}
