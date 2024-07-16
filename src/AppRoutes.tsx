import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
