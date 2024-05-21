import React from "react";
import Header from "./_components/Header.jsx";

function Provider({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
