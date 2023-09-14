import React from "react";
import ReactDOM from "react-dom/client";
import NoteApp from "./component/NoteApp";
import "./styles/style.css";
import "./styles/scrollbar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);
