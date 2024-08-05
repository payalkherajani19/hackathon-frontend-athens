import React, { useState, MouseEvent, useEffect } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Button,
  Chip,
  Menu,
  MenuItem,
  Typography,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EmailSequence from "../components/EmailSequence";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
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
    height: "max-content",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(1),
  },
  table: {
    minWidth: 650,
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

  const [buisnessDetailInfo, setBuisnessDetailInfo] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const { dataId } = useParams();

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

  const fetchDataBasedOnDataId = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://backend-athens.onrender.com/api/leads/businessDetailedInfo`,
        {
          params: {
            data_id: dataId,
          },
        }
      );
      setBuisnessDetailInfo(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataBasedOnDataId();
  }, []);

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.root}>
          <div className={classes.mainContent}>
            <Grid container spacing={2}>
              <Typography variant={"h5"}>
                <b>{buisnessDetailInfo?.title ?? "-"}</b>
              </Typography>
              <div></div>
              <Grid item xs={6} sm={12}>
                <span>Address</span>
                <Paper className={classes.paper}>
                  <Typography variant="body1">
                    {buisnessDetailInfo?.address
                      ? buisnessDetailInfo?.address
                      : "-"}
                  </Typography>
                </Paper>
              </Grid>
              {/* <Grid item xs={6} sm={12}>
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
              </Grid> */}
              <Grid item xs={6} sm={12}>
                <span>About</span>
                <Paper className={`${classes.paper} ${classes.about}`}>
                  <Typography variant="body1" style={{ textAlign: "left" }}>
                    {buisnessDetailInfo?.about}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={12}>
                <span>Website</span>
                <Paper className={`${classes.paper}`}>
                  <Typography variant="body1" style={{ textAlign: "left" }}>
                    {buisnessDetailInfo?.website}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={12}>
                <span>Type</span>
                <Paper className={`${classes.paper}`}>
                  <Typography variant="body1" style={{ textAlign: "left" }}>
                    {buisnessDetailInfo?.type}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={6} sm={12}>
                <span>Services</span>
                <Paper
                  className={`${classes.paper}`}
                  style={{ height: "max-content", textAlign: "left" }}
                >
                  <List>
                    {buisnessDetailInfo?.services.map(
                      (s: string, index: number) => {
                        return (
                          <ListItemText>
                            {index + 1}
                            {". "} {s}
                          </ListItemText>
                        );
                      }
                    )}
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={12}>
                <span>Employers</span>
                <TableContainer component={Paper} className={classes.paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Designation</b>
                        </TableCell>
                        <TableCell><b>Action</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {buisnessDetailInfo?.employeeDetails?.map((emp: any) => (
                        <TableRow key={emp.id}>
                          <TableCell component="th" scope="row">
                            {emp?.name}
                          </TableCell>
                          <TableCell>{emp?.designation}</TableCell>
                          <TableCell>
                            <Button
                              variant="contained"
                              color="primary"
                              style={{
                                color: "white",
                                cursor: "pointer",
                              }}
                            >Generate</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default App;
