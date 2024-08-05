import React, { useEffect, useState } from "react";
import axios from "axios";
import PlacesTable from "../components/PlacesTable";
import { Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import useCustomContext from "../Hook";
import Prompt from "../components/Prompt";

const PlacesListPage = () => {
  const [placesData, setPlacesData] = useState<Array<any>>([]);
  const { state, setState } = useCustomContext();
  const [prompt, setPrompt] = useState('')
  const getListOfData = async () => {
    if (prompt) {
      try {
        const response = await axios.get(
           `https://backend-athens.onrender.com/api/leads/businessesFromPrompt`, {
             params: {
               prompt: btoa(prompt)
             }
          }
        );
        setPlacesData(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPlacesData([]);
    }
  };

  useEffect(() => {
    getListOfData();
  }, [prompt]);


  return (
    <div>
      <Layout>
        <>
          <Typography variant="body1">
            {state.selectedProject?.[0]?.name}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
             {placesData.length === 0 && <Prompt prompt={prompt} setPrompt={setPrompt} />}
             {placesData.length > 0 && <Typography variant="h6"><b>Results for: {prompt}</b></Typography>}
            </Grid>
            <Grid item xs={12}>
              {placesData.length > 0 && <PlacesTable data={placesData} />}
            </Grid>
          </Grid>
        </>
      </Layout>
    </div>
  );
};

export default PlacesListPage;
