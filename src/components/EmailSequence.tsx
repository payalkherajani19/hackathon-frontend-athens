import React, { useEffect, useState } from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Button,
  IconButton,
  Box,
  Typography,
  TextField,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  slidingComponent: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "50%",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease-out",
    zIndex: 1200,
    overflow: 'scroll'
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
    width: '100%',
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
  },
  btnPaper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "0.5rem",
  },
  button: {
    right: theme.spacing(2),
    cursor: "pointer",
  },
  emailBody: {
    height: "max-content",
    textAlign: 'left'
  },
}));

const EmailSequence: React.FC<{
  visible: boolean;
  onClose: () => void;
  dataId: string;
  employeeId: string;
}> = ({ visible, onClose, dataId, employeeId }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)
  const [emailInfo,setEmailInfo] = useState<any>({
    body: '',
    subject: ''
  })
  
  const generatePersonalizedEmail = async() => {
   try {
       setLoading(true)
       const response = await axios.get(
        `https://backend-athens.onrender.com/api/email/generatePersonalized?`, {
          params: {
            businessId: dataId,
            employeeId: employeeId
          }
       }
     );
     setEmailInfo(response.data)
   } catch (error) {
     console.error(error)
   }
   finally{
     setLoading(false)
   }
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { value } = e.target
      setEmailInfo({ ...emailInfo, subject: value })
  }

  useEffect(() => {
      generatePersonalizedEmail()
  },[])

  console.log({ emailInfo })

  return (
    <Paper
      className={`${classes.slidingComponent} ${
        visible ? classes.visible : ""
      }`}
    >
      <div className={classes.root}>
        {
          loading ? (<Spinner />) : (
            <div className={classes.mainContent} style={{ overflow: 'auto'}}>
            <Grid container spacing={2} style={{ width: '100%'}}>
              <Grid item style={{ width: '100%'}}>
                <Box className={classes.btnPaper}>
                  <Typography variant="body1"><b>Hyper Personalized Email</b></Typography>
                  <IconButton onClick={onClose} style={{  position: 'absolute', right: '50px' }}>
                    <CancelIcon fontSize="large" style={{ cursor: "pointer" }} />
                  </IconButton>
                  ,
                </Box>
              </Grid>
              <Grid item xs={6} sm={12}>
                <Paper className={classes.paper}>
                  <TextField
                    value={emailInfo?.subject}
                    onChange={(e) => handleSubjectChange(e)}
                    style={{ width: '100%'}}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6} sm={12}>
                <Paper className={`${classes.emailBody} ${classes.paper}`}>
                <div dangerouslySetInnerHTML={{ __html: emailInfo?.body }} /> 
                </Paper>
              </Grid>
            </Grid>
          </div>
          )
        }

      </div>
    </Paper>
  );
};

export default EmailSequence;
