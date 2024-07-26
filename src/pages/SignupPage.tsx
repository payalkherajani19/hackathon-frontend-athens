import React from 'react';
import { Container, CssBaseline, Typography, TextField, Button, Grid, makeStyles, Paper, Link, Divider } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:' linear-gradient(#000, #fff)'
  },
  paper: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    boxShadow: theme.shadows[3],
    width: '40%',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '10px 0px 10px 0px'
  },
  authProviders:{
    margin: theme.spacing(1)
  },
  spacer: {
     borderBottom: '1px solid #000!important',
     flex: 1,
     alignSelf: 'center',
     marginRight: '5px' ,
     marginLeft: '5px' 
    }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" className={classes.root} >
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create an Account
        </Typography>
        <Grid container justifyContent='center' className={classes.authProviders}>
          <GoogleOAuthProvider clientId="<your_client_id>">
             <GoogleLogin onSuccess={() => console.log("Yay Success")} />
          </GoogleOAuthProvider>
        </Grid>
        <Grid container justifyContent='center' className={classes.authProviders}>
            <div className={classes.spacer}></div>
            <span>or</span>
            <div className={classes.spacer}></div>
        </Grid>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
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
                required
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
                required
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
          >
            Create Account
          </Button> 
          {/* <Grid container justify-content="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </Paper>
    </Container>
  );
};

export default App;