import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  makeStyles,
  Button,
  Typography,
  List,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Box,
} from "@material-ui/core";
import EmailSequence from "../components/EmailSequence";
import axios from "axios";
import Spinner from "../components/Spinner";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

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

interface Props {
  dataId: string;
  handleGoBack: () => void;
}
const ProspectoSalon: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [buisnessDetailInfo, setBuisnessDetailInfo] = useState<any>([]);
  const [openEmailComponent, setOpenEmailComponent] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { dataId } = props;

  const fetchDataBasedOnDataId = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/leads/businessDetailedInfo`,
        {
          params: {
            data_id: dataId,
          },
        }
      );
      setBuisnessDetailInfo(response.data);
    } catch (error) {
      setError("Something went wrong, please retry");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    empId: string
  ) => {
    setOpenEmailComponent(true);
    setEmployeeId(empId);
  };

  const handleClose = () => {
    setOpenEmailComponent(false);
    setEmployeeId("");
  };

  useEffect(() => {
    fetchDataBasedOnDataId();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: "2rem",
          }}
        >
          <Spinner message={`Ameya, hold on, finding detail information....`} />
        </Box>
      ) : (
        <div className={classes.root}>
          <div className={classes.mainContent}>
            <Grid container spacing={2}>
              {!Boolean(error) ? (
                <>
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      aria-label="go-back"
                      onClick={() => props?.handleGoBack()}
                    >
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <Typography variant={"h5"}>
                      <b>{buisnessDetailInfo?.title ?? "-"}</b>
                    </Typography>
                  </Box>
                  <Grid item xs={6} sm={12}>
                    <span>Address</span>
                    <Paper className={classes.paper}>
                      <Typography variant="body1">
                        {buisnessDetailInfo?.address
                          ? buisnessDetailInfo?.address
                          : "Address not Found"}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    <span>About</span>
                    <Paper className={`${classes.paper} ${classes.about}`}>
                      <Typography variant="body1" style={{ textAlign: "left" }}>
                        {buisnessDetailInfo?.about ?? 'About not found' }
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={12}>
                    <span>Website</span>
                    <Paper className={`${classes.paper}`}>
                      <Typography variant="body1" style={{ textAlign: "left" }}>
                        {buisnessDetailInfo?.website ?? 'Website URL not found'}
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={6} sm={12}>
                    <span>Type</span>
                    <Paper className={`${classes.paper}`}>
                      <Typography variant="body1" style={{ textAlign: "left" }}>
                        {buisnessDetailInfo?.type ?? 'Buiness type not found'}
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
                        {
                          buisnessDetailInfo?.services?.length > 0 ? (
                            buisnessDetailInfo?.services?.map(
                              (s: string, index: number) => {
                                return (
                                  <ListItemText>
                                    {index + 1}
                                    {". "} {s}
                                  </ListItemText>
                                );
                              }
                            )
                          ) : (
                            <div>No Services Found</div>
                          )
                        }
                        
                      </List>
                    </Paper>
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    <span>Employers</span>
                    <TableContainer component={Paper} className={classes.paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <b>Name</b>
                            </TableCell>
                            <TableCell>
                              <b>Designation</b>
                            </TableCell>
                            <TableCell>
                              <b>Action</b>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            buisnessDetailInfo?.employeeDetails?.length > 0 ? (
                              buisnessDetailInfo?.employeeDetails?.map(
                                (emp: any) => (
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
                                        onClick={(e) => handleGenerate(e, emp?.id)}
                                      >
                                        Generate Email
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                )
                              )
                            )  : (
                              <div>No Employees Found</div>
                            )
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    {openEmailComponent ? (
                      <EmailSequence
                        visible={openEmailComponent}
                        onClose={handleClose}
                        dataId={dataId}
                        employeeId={employeeId}
                      />
                    ) : null}
                  </Grid>
                </>
              ) : (
                <>
                <Box style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      aria-label="go-back"
                      onClick={() => props?.handleGoBack()}
                    >
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <Typography variant={"h5"}>
                      <b>{error}</b>
                    </Typography>
                  </Box>
                </>
              )}
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default ProspectoSalon;
