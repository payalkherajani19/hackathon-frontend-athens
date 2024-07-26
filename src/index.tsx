import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "./Context";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider>
  <ThemeProvider theme={theme}>
    {" "}
    <CssBaseline />
    <App />
  </ThemeProvider>
  </Provider>,
  rootEl
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
