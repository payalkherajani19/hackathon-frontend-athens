import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { LinkedIn as LinkedInIcon } from "@material-ui/icons";
import GoogleIcon from '../components/GoogleIcon'
import useCustomContext from "../Hook";
import RegisterImg from "../assests/register.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    width: "70%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px 0px 10px 0px",
  },
  authProviders: {
    margin: theme.spacing(1),
  },
  spacer: {
    borderBottom: "1px solid #000!important",
    flex: 1,
    alignSelf: "center",
    marginRight: "5px",
    marginLeft: "5px",
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    marginLeft: '0px',
    marginRight: '0px',
    padding: '0.5rem'
  },
  googleButton: {
    backgroundColor: "#4285F4",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#357ae8",
    },
  },
  linkedInButton: {
    backgroundColor: "#0077B5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#005582",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state, setState } = useCustomContext();

  const handleSubmit = () => {
    navigate("/projects");
    setState({
      ...state,
      user: {
        id: "1",
        name: "Ameya",
        email: "ameya@appointy.com",
      },
    });
  };

  return (
    <Container
      component="main"
      maxWidth="xl"
      className={classes.root}
      style={{ padding: "0px" }}
    >
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={6}>
          <img
            src={RegisterImg}
            alt="Full Height"
            style={{
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
              width: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.paper}>
            <Typography
              component="h3"
              variant="h5"
              style={{ marginBottom: "2rem" }}
            >
              <b>Create your free account</b>
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    name="fullName"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </form>
            <Grid
              container
              justifyContent="center"
              className={classes.authProviders}
            >
              <div className={classes.spacer}></div>
              <span>or</span>
              <div className={classes.spacer}></div>
            </Grid>
            <Grid
              container
              justifyContent="space-around"
              style={{
                flexDirection: "column",
              }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  className={`${classes.button} ${classes.googleButton}`}
                  startIcon={<GoogleIcon />}
                >
                  Sign Up with Google
                </Button>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  className={`${classes.button} ${classes.linkedInButton}`}
                  startIcon={<LinkedInIcon className={classes.icon} />}
                >
                  Sign Up with LinkedIn
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
