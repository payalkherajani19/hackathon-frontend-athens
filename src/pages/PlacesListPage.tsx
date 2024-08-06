import React, { useEffect, useState } from "react";
import axios from "axios";
import PlacesTable from "../components/PlacesTable";
import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import useCustomContext from "../Hook";
import Prompt from "../components/Prompt";
import loadable from "@loadable/component";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const ProspectoPage = loadable(() => import("./ProspectsSalon"));

const PlacesListPage = () => {
  const [placesData, setPlacesData] = useState<Array<any>>([]);
  const { state, setState } = useCustomContext();
  const [prompt, setPrompt] = useState("");
  const [openSingleBuisnessPage, setOpenSingleBuisnessPage] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const getListOfData = async () => {
    if (prompt) {
      try {
        const response = await axios.get(
          `https://backend-athens.onrender.com/api/leads/businessesFromPrompt`,
          {
            params: {
              prompt: btoa(prompt),
            },
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

  const handleClickOnRow = (dataId: string) => {
    setOpenSingleBuisnessPage(true);
    setSelectedDataId(dataId);
  };

  const handleGoback = () => {
    setOpenSingleBuisnessPage(false);
    setSelectedDataId("");
    setOpenEdit(false);
  };

  const handleEditClick = () => {
    setOpenEdit(true);
  };

  useEffect(() => {
    getListOfData();
  }, [prompt]);

  return (
    <div>
      <Layout>
        <>
          {openSingleBuisnessPage ? (
            <ProspectoPage
              dataId={selectedDataId}
              handleGoBack={handleGoback}
            />
          ) : (
            <>
              <Typography variant="body1">
                {state.selectedProject?.[0]?.name}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {(placesData.length === 0 || openEdit === true) && (
                    <Prompt
                      prompt={prompt}
                      setPrompt={setPrompt}
                      setOpenEdit={setOpenEdit}
                    />
                  )}
                  {placesData.length > 0 && openEdit === false && (
                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1rem'}}>
                      <Typography variant="h6">
                        <b>
                          Results for {placesData.length} {prompt}
                        </b>
                      </Typography>
                      <IconButton
                        aria-label="go-back"
                        onClick={handleEditClick}
                      >
                        <EditOutlinedIcon style={{ color:state.themeColor }} />
                      </IconButton>
                    </Box>
                  )}
                </Grid>
                <Grid item xs={12}>
                  {placesData.length > 0 && (
                    <PlacesTable
                      data={placesData}
                      handleRowClick={handleClickOnRow}
                    />
                  )}
                </Grid>
              </Grid>
            </>
          )}
        </>
      </Layout>
    </div>
  );
};

export default PlacesListPage;
