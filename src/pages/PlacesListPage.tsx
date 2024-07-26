import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchComponent from "../components/SearchComponent";
import data from "../data.json";
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
          "https://jsonplaceholder.typicode.com/todos/2"
        );
        // await getJson({
        //     engine: "google_maps",
        //     type: "place",
        //     data: "%214m5%213m4%211s0x89c259a61c75684f%3A0x79d31adb123348d2%218m2%213d40.7457399%214d-73.9882272",
        //     api_key:'5ce23d4a414d18c84d3efef573b16b0f3792005f60c19cd93fc94cdfce5bb6bc',
        //     q: finalSearchTerm
        //   }).then((output: any) => console.log(output));
        setPlacesData(data.placesData);
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
              <Prompt prompt={prompt} setPrompt={setPrompt} />
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
