import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "../../pages/Layout";
import Introduction from "../pages/Introduction";
import Project from "../pages/Project";
function Router() {
  return (
    <BrowserRouter>
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
          path="/Projects"
          element={
            <Layout>
              <Project/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
