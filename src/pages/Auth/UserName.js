import React, { useState } from "react";
import "../../styles/Login.css";
import login from "../../assets/login_template.jpeg";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Confirmation from "./Confirmation";

var userDetailContext = React.createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
      background: "white",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(1),
    },
    "& h2": {
      color: "white",
    },
  },
}));

const UserName = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6} sm={12}>
          <img src={login} alt="Login_template" className="login_image" />;
        </Grid>
        <div className="content">
          <center>
            <h2>What should we call you?</h2>
          </center>
          <Grid item md={6} sm={12}>
            <form>
              <TextField
                label="Username"
                variant="filled"
                value={userName.trim()}
                required
                onChange={(e) => setUserName(e.target.value)}
                style={{ borderRadius: 4 }}
              />
              <br />
              <TextField
                label="First Name"
                variant="filled"
                type="text"
                value={fname.trim()}
                required
                onChange={(e) => setFname(e.target.value)}
                style={{ borderRadius: 4 }}
              />
              <br />
              <TextField
                label="Last Name"
                variant="filled"
                type="text"
                required
                value={lname.trim()}
                onChange={(e) => setLname(e.target.value)}
                style={{ borderRadius: 4 }}
              />
              <br />
              <Link to="/Confirmation">
                <Button
                  type="submit"
                  variant="contained"
                  className="signup"
                  style={{ width: 300 }}
                >
                  Continue
                </Button>
              </Link>
              <br />
            </form>
          </Grid>
        </div>
      </Grid>
      
    </div>
  );
};

export default UserName;
export { userDetailContext };
