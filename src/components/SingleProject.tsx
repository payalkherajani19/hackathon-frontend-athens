import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { useNavigate, useParams } from "react-router-dom";
import useCustomContext from "../Hook";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, Box, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  singleProjectBox: {
    display: "flex",
    flexDirection: "column",
  },
  projectsActions: {
    alignSelf: "flex-end",
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px 5px 10px 5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  actions: {
    display: "flex",
    alignSelf: "flex-end",
  },
}));

const SingleProject = () => {
  const { id } = useParams();
  const { state , setState } = useCustomContext();
  const classes = useStyles();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/places')
  }

  useEffect(() => {
    const selectedProject = state.usersProjects.filter((p: any) => {
        if (p.id === id) {
          return p;
        }
      });

      setState({ ...state, selectedProject: selectedProject })
  },[])

  return (
    <Layout>
      <>
        <Typography variant="body1">{state.selectedProject?.[0]?.name ?? ''}</Typography>
        <Box className={classes.singleProjectBox}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={handleClick}
              >
                Generate with AI
              </Button>
              <p>Let AI generate lists, find information, build intelligence, craft personalized emails for your work</p>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Build Manually
              </Button>
            </Grid>
          </Grid>
        </Box>
      </>
    </Layout>
  );
};

export default SingleProject;
