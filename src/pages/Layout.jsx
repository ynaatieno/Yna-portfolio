import Nav from "../components/Nav";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="=flex min-h-[100vh]">{children}</main>
    </div>
  );
}
export default Layout;
