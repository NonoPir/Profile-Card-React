import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
