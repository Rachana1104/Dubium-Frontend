import React, { useState } from "react";
import "../../styles/Login.css";
import login from "../../assets/login_template.png";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'

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

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword({
      showPassword: !showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function authConfirm(token) {
    var item = { "auth_token": token }

    let result = await fetch('https://dubium-apis.herokuapp.com/account/google/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    })
    result = await result.json()
    console.log(result)
  }

  function responseGoogle(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var auth_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + auth_token);

    authConfirm(auth_token);
  }

  async function log_in() {

    let item = { email, password }

    let result = await fetch('https://dubium-apis.herokuapp.com/account/login/', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    })
    result = await result.json()
    console.log(result)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6} sm={12}>
          <img src={login} alt="Login_template" className="login_img" />;
        </Grid>
        <div className="content">
          <center><h2>Welcome back User</h2></center>
          <Grid item md={6} sm={12}>
            <TextField
              label="Email"
              variant="filled"
              required
              value={email.trim()}
              onChange={(e) => setEmail(e.target.value)}
              className="login_username"
              style={{ borderRadius: 4 }}
            />
            <br />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              required
              value={password.trim()}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: 4 }}
            // endAdornment={
            //   <InputAdornment position="end">
            //     <IconButton
            //       aria-label="toggle password visibility"
            //       onClick={handleClickShowPassword}
            //       onMouseDown={handleMouseDownPassword}
            //       edge="end"
            //     >
            //       {showPassword ? <VisibilityOff /> : <Visibility />}
            //     </IconButton>
            //   </InputAdornment>
            // }
            />
            <Link href="#">
              <h6>Forgot your Password?</h6>
            </Link>
            <Button
              type="submit"
              variant="contained"
              className="login"
              style={{ width: 300 }}
              onClick={log_in}
            >
              Login
            </Button>
            <div className="or">OR</div>
            <GoogleLogin
              clientId="46358633355-dokobqrl0fu620jvj5itidc3vr6afl9a.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              theme='dark'
              // icon={false}
              render={renderProps => (
                <Button
                  onClick={renderProps.onClick}
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  style={{ width: 310 }}
                  className="create" > Login with Google </Button>
              )}
            />
            <br />
            <Link to="/SignUp">
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                style={{ width: 310 }}
                className="create"
              >
                New here? Create Your Account
              </Button>
            </Link>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
