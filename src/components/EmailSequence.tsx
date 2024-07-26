import React from "react";
import { Paper, makeStyles, Grid, Button, IconButton, Box } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

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
  gridcont: {
    marginLeft: "28vw",
  },
  btnPaper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "0.5rem"
  },
  button: {
    right: theme.spacing(2),
    cursor: "pointer",
  },
  emailBody: {
    height: "250px",
  },
}));

const EmailSequence: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={`${classes.slidingComponent} ${
        visible ? classes.visible : ""
      }`}
    >
      <div className={classes.root}>
        <div className={classes.mainContent}>
          <Grid container spacing={2}>
            <Grid item className={classes.gridcont}>
              <Box className={classes.btnPaper}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Generate
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  style={{
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </Button>
                <IconButton onClick={onClose}>
                  <CancelIcon fontSize = "large" style={{ cursor: "pointer"}} />
                </IconButton>, 
              </Box>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Paper className={classes.paper}>Subject</Paper>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Paper className={`${classes.emailBody} ${classes.paper}`}>
                Email Body
              </Paper>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Paper className={`${classes.emailBody} ${classes.paper}`}>
                Attach Documents
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Paper>
  );
};

export default EmailSequence;
