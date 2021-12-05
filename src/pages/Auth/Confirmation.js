import React from "react";
import "../../styles/Login.css";
import login from "../../assets/login_template.png";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {userDetailContext} from '../../App.js';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",

    "& h2": {
      color: "white",
    },
  },
}));

const Confirmation = () => {
  const classes = useStyles();

var contextData = React.useContext(userDetailContext);

console.log(contextData);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6} sm={12}>
          <img src={login} alt="Login_template" className="login_image" />;
        </Grid>
        <div className="content">
          <center>
            <h2 style={{paddingTop:180}}>Hi, {contextData} You are all set!</h2>
          </center>
          <CheckCircleOutlineOutlinedIcon color="secondary" sx={{fontSize: 80, paddingTop:2, paddingLeft:8 }}/>
        </div>
      </Grid>
    </div>
  );
};

export default Confirmation;
