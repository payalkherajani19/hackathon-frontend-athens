import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchComponent from "../components/SearchComponent";
import data from "../placesData.json";
import PlacesTable from "../components/PlacesTable";
import { Grid } from "@material-ui/core";
import Layout from "../components/Layout";


const PlacesListPage = () => {
  const [finalSearchTerm, setFinalSearchTerm] = useState<string>("");
  const [placesData, setPlacesData] = useState<Array<any>>([]);
  const getListOfData = async () => {
    if (finalSearchTerm) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        // await getJson({
        //     engine: "google_maps",
        //     type: "place",
        //     data: "%214m5%213m4%211s0x89c259a61c75684f%3A0x79d31adb123348d2%218m2%213d40.7457399%214d-73.9882272",
        //     api_key:'5ce23d4a414d18c84d3efef573b16b0f3792005f60c19cd93fc94cdfce5bb6bc',
        //     q: finalSearchTerm
        //   }).then((output: any) => console.log(output));
        setPlacesData(data.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPlacesData([]);
    }
  };

  useEffect(() => {
    getListOfData();
  }, [finalSearchTerm]);

  const handleSearch = (searchTerm: string) => {
    setFinalSearchTerm(searchTerm);
  };

  console.log({ finalSearchTerm, placesData });

  return (
    <div>
      <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchComponent onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          {placesData.length > 0 && <PlacesTable data={placesData} />}
        </Grid>
      </Grid>
      </Layout>
    </div>
  );
};

export default PlacesListPage;
