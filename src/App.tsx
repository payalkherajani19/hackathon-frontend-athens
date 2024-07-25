import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Layout from "./components/Layout";
import axios from "axios";

function App() {
  const getListOfData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListOfData();
  }, []);

  return (
    <div className="App">
      <Layout>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Layout>
    </div>
  );
}

export default App;
