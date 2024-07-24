import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Project from "./pages/Project";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/Introduction"
          element={
            <Layout>
              <Introduction />
            </Layout>
          }
        />
        <Route
          path="/Project"
          element={
            <Layout>
              <Project />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
