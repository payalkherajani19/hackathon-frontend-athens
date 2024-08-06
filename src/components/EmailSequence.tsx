import React, { useEffect, useRef, useState } from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Button,
  IconButton,
  Box,
  Typography,
  TextField,
  Tabs,
  Tab,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import Spinner from "./Spinner";
import useCustomContext from "../Hook";

const useStyles = (themeColor: string) =>
  makeStyles((theme) => ({
    slidingComponent: {
      position: "fixed",
      top: 0,
      right: 0,
      height: "100vh",
      width: "50%",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease-out",
      zIndex: 1200,
      overflow: "scroll",
    },
    visible: {
      transform: "translateX(0%)",
    },
    closeButton: {
      position: "absolute",
      top: theme.spacing(1),
      right: theme.spacing(1),
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(5),
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    mainContent: {
      flex: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      position: "relative",
      display: "flex",
      alignItems: "center",
      alignSelf: "flex-end",
      marginTop: "1rem",
      marginBottom: "1rem",
      border: "1px solid black",
    },
    btnPaper: {
      padding: theme.spacing(2),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "0.5rem",
      paddingLeft: "0px",
    },
    button: {
      right: theme.spacing(2),
      cursor: "pointer",
    },
    emailBody: {
      height: "max-content",
      textAlign: "left",
    },
    indicator: {
      backgroundColor: `${themeColor} !important`,
    },
  }));

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const EmailSequence: React.FC<{
  visible: boolean;
  onClose: () => void;
  dataId: string;
  employeeId: string;
}> = ({ visible, onClose, dataId, employeeId }) => {
  const { state } = useCustomContext();
  const classes = useStyles(state.themeColor)();

  const [loading, setLoading] = useState(false);
  const [allEmails, setAllEmails] = useState<any>([]);
  const [currentEmailInfo, setCurrentEmailInfo] = useState<any>({
    body: "",
    subject: "",
  });
  const [value, setValue] = React.useState(0);
  const contentEditableRef = useRef<any>(null);

  const generatePersonalizedEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/email/generatePersonalized?`,
        {
          params: {
            businessId: dataId,
            employeeId: employeeId,
          },
        }
      );
      setAllEmails(response.data);
      setCurrentEmailInfo(response.data[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;
    setCurrentEmailInfo({ ...currentEmailInfo, subject: value });
  };

  useEffect(() => {
    generatePersonalizedEmail();
  }, []);

  const handleBlur = (e: any) => {
    setCurrentEmailInfo({
      ...currentEmailInfo,
      body: contentEditableRef?.current?.innerHTML,
    });
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    setCurrentEmailInfo(allEmails[newValue]);
  };

  return (
    <Paper
      className={`${classes.slidingComponent} ${
        visible ? classes.visible : ""
      }`}
    >
      {loading ? (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            height: "inherit",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Spinner
            message={`${
              state?.user?.name ?? "Ameya"
            }, perspecto is generating personalized email for you....`}
          />
        </Box>
      ) : (
        <div className={classes.root}>
          <div className={classes.mainContent} style={{ overflow: "auto" }}>
            <Grid container spacing={2} style={{ width: "100%" }}>
              <Grid item style={{ width: "100%" }}>
                <Box className={classes.btnPaper}>
                  <Typography variant="subtitle1">
                    <b>Hyper Personalized Email</b>
                  </Typography>
                  <IconButton
                    onClick={onClose}
                    style={{ position: "absolute", right: "50px" }}
                  >
                    <CancelIcon
                      fontSize="large"
                      style={{ cursor: "pointer" }}
                    />
                  </IconButton>
                </Box>
              </Grid>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                classes={{
                  indicator: classes.indicator,
                }}
              >
                {allEmails?.map((email: any) => {
                  return <Tab label={email?.tone} />;
                })}
              </Tabs>
              <TabPanel value={value} index={value}>
                <Grid item xs={6} sm={12}>
                  <span>Email Subject</span>
                  <Paper className={classes.paper}>
                    <TextField
                      value={currentEmailInfo?.subject}
                      onChange={(e) => handleSubjectChange(e)}
                      style={{ width: "100%" }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={12}>
                  <span>Email Body</span>
                  <Paper className={`${classes.emailBody} ${classes.paper}`}>
                    <div
                      contentEditable
                      ref={contentEditableRef}
                      dangerouslySetInnerHTML={{
                        __html: currentEmailInfo?.body,
                      }}
                      onBlur={handleBlur}
                      style={{ border: "1px solid #ccc", padding: "10px" }}
                    ></div>
                  </Paper>
                </Grid>
              </TabPanel>
            </Grid>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default EmailSequence;
