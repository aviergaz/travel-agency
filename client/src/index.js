import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import './index.css'

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Router>
  </Suspense>,
  document.getElementById("root")
);
