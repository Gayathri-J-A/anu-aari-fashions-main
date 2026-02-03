import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { HashRouter } from "react-router-dom";
import App from './App';
=======
import { HashRouter } from "react-router-dom"; // changed
import App from "./App.tsx";
>>>>>>> ebbb470 (Commit all changes including deletions and new files)
import "./index.css";
const rootElement = document.getElementById("root");
const routerBasename = import.meta.env.PROD ? "/anu-aari-fashions-main" : "/";


// createRoot(document.getElementById("root")!).render(
  if (rootElement) {
  const root = createRoot(rootElement); 
  root.render(
  <StrictMode>
<<<<<<< HEAD
    <HashRouter basename={routerBasename}>
    <App />
   </HashRouter>
  </StrictMode>
);
  }
=======
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
>>>>>>> ebbb470 (Commit all changes including deletions and new files)
