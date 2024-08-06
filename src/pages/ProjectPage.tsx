import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  Box,
  makeStyles,
  Button,
  Dialog,
  Grid,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Typography
} from "@material-ui/core";
import Spinner from "../components/Spinner";
import data from '../data.json'
import useCustomContext from "../Hook";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  projects: {
    display: "flex",
    flexDirection: "column",
  },
  projectsActions: {
    alignSelf: "flex-end",
    marginBottom: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px 5px 10px 5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  actions: {
     display: 'flex',
     alignSelf: 'flex-end'
  }
}));

const ProjectPage = () => {
  const classes = useStyles();
  const [openProjectForm, setOpenProjectForm] = useState(false);
  const [projectName, setProjectName] = useState("")
  const [loading, setLoading] = useState(false)
  const { state, setState } = useCustomContext()
  const navigate = useNavigate()

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
     e.preventDefault()
    //  setLoading(true)
     //API CALL
  };

  const handleFormChange = (e: any) => {
      e.preventDefault()
      const { value } = e.target
      setProjectName(value)
  }

  const handleClose = () => {
    setOpenProjectForm(false)
    setProjectName("")
  }

  const handleNavigateToSingleProject = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
     navigate(`/places`)
  }

  const getBrandColor = async() => {
   try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/getPrimaryColour`, {
        params: {
           user_email: state.user.email
        }
      })
      setState({ ...state, themeColor: response.data.primary_colour })
     
   } catch (error) {
    console.error(error)
   }
  }

  useEffect(() => {
     setState({ ...state, usersProjects: data.projects })
     getBrandColor()
  },[])

  return (
    <Layout>
      <Box className={classes.projects}>
        <Box className={classes.actions}>
          <Button variant="outlined" onClick={(e) => setOpenProjectForm(true)}>
            New Project
          </Button>
        </Box>
        <Box className="list-of-projects">
            <Box style={{ marginBottom: '2rem'}}>
              <Typography variant="h6">LIST OF PROJECTS</Typography>
            </Box>
            <Grid container spacing={3}>
                  {
                    data.projects.map((project) => {
                        return (
                             <Grid item xs={3} key={project.id} style={{ cursor: 'pointer'}} onClick={(e) => handleNavigateToSingleProject(e, project.id)}>
                                   <Paper className={classes.paper}>{project.name}</Paper>
                             </Grid>   
                        )
                    })
                  }
            </Grid>
        </Box>
        <Dialog
          onClose={handleClose}
          open={openProjectForm}
          maxWidth='xl'
        >
          <DialogTitle id="form-dialog-title">New Project</DialogTitle>
          <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="projectname"
                    label="ProjectName"
                    name="projectName"
                    autoFocus
                    style={{ width: '500px'}}
                    value={projectName}
                    onChange={handleFormChange}
                  />
                </Grid>
              </Grid>

              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={(e) => handleSubmit(e)}
                >
                  { loading ? <Spinner /> : 'Save'} 
                </Button>
              </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </Layout>
  );
};

export default ProjectPage;
