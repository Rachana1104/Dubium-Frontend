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
  const [userName, setUserName] = useState("");
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

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6} sm={12}>
          <img src={login} alt="Login_template" className="login_img" />;
        </Grid>
        <div className="content">
          <center><h2>Welcome back User</h2></center>
          <Grid item md={6} sm={12}>
            <form>
              <TextField
                label="Username"
                variant="filled"
                required
                value={userName.trim()}
                onChange={(e) => setUserName(e.target.value)}
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
              >
                Login
              </Button>
            </form>
            <div className="or">OR</div>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              style={{ paddingLeft: 10, width: 300 }}
              className="google"
            >
              Google
            </Button>
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
