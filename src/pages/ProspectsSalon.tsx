import React, { useState, MouseEvent } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Button,
  Chip,
  Menu,
  MenuItem,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EmailSequence from "../components/EmailSequence";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    gap: '2rem'
  },
  mainContent: {
    flex: 1,
  },
  sidebar: {
    width: 300,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: 'max-content'
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1)
  },
  button: {
    position: "absolute",
    right: theme.spacing(2),
    cursor: "pointer",
  },
  summary: {
    height: "100px",
    position: "relative",
  },
  about: {
    height: "170px",
  },
  headingContainer: {
    width: "100%",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  heading: {
    fontWeight: "bold",
  },
  chipContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    width: "100%",
    paddingLeft: theme.spacing(2),
  },
  chips: {
    cursor: "pointer",
  },
  menuPaper: {
    marginTop: theme.spacing(5),
  },
  updateBtn: {
    margin: "auto",
    cursor: "pointer",
    marginTop: theme.spacing(1)
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  const [chipsArray, setChipsArray] = useState([
    "About",
    "News",
    "Services",
    "Industry",
    "Trends",
    "Employee",
    "First Name",
    "Last Name",
    "Company Name",
    "Detailed Experience",
    "Current Job Title",
    "Work History",
    "Education",
    "Location",
    "LinkedIn Posts",
    "JTBD",
    "Hobbies",
  ]);

  const [visibleComponent, setVisibleComponent] = useState<string | null>(null);

  const handleMenuItemClick = (option: string) => {
    setVisibleComponent(option);
    handleClose();
  };

  const closeEmailSequence = () => {
    setVisibleComponent(null);
  };

  const [generateMenu, setGenerateMenu] = useState([
    { name: "Build Email Sequence", path: "/email-sequence" },
    { name: "One Off Email", path: "/one-off-email" },
    { name: "Short Message for Twitter", path: "/twitter-message" },
    { name: "Icebreaker", path: "/icebreaker" },
  ]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout>
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
         
          <Grid item xs={6} sm={12}>
            <span>Tags</span>
            <Paper className={classes.paper}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Add Tags
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={12}>
            <span>Summary of the Company</span>
            <Paper className={`${classes.paper} ${classes.summary}`}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Generate
                <ArrowDropDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{ className: classes.menuPaper }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {generateMenu.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={() => handleMenuItemClick(item.path)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
                <EmailSequence
                  visible={!!visibleComponent}
                  onClose={closeEmailSequence}
                />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={12}>
            <span>About</span>
            <Paper className={`${classes.paper} ${classes.about}`}>  
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                <LinkIcon />
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={12}>
            <span>Recent News</span>
            <Paper className={`${classes.paper} ${classes.about}`}> 
            </Paper>
          </Grid>
          <Grid item xs={6} sm={12}>
            <span>Employers</span>
            <Paper className={`${classes.paper} ${classes.about}`}>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <Paper className={classes.sidebar}>
        <div className={classes.headingContainer}>
          <div className={classes.heading}>Parameters</div>
        </div>
        <div className={classes.chipContainer}>
          {chipsArray.map((label, index) => (
            <Chip
              key={index}
              label={label}
              icon={<CancelIcon style={{ color: "red" }} />}
              className={classes.chips}
            />
          ))}
        </div>
        <Button className={classes.updateBtn} variant="contained" color="primary">
          Update
        </Button>
      </Paper>
    </div>
    </Layout>
  );
};

export default App;
