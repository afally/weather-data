import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
