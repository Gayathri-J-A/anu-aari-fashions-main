import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from './App';
import "./index.css";
const rootElement = document.getElementById("root");
const routerBasename = import.meta.env.PROD ? "/anu-aari-fashions-main" : "/";


// createRoot(document.getElementById("root")!).render(
  if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(
  <StrictMode>
    <HashRouter basename={routerBasename}>
    <App />
   </HashRouter>
  </StrictMode>
);
  }