import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Layout from "./components/Layout";
import PlacesListPage from "./pages/PlacesListPage";


function App() {
  return (
    <div className="App">
      <Layout>
          <PlacesListPage />
      </Layout>
    </div>
  );
}

export default App;
