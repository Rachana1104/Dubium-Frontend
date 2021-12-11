import React, { useState } from 'react'
import '../../styles/SignUp.css';
import login from '../../assets/login_template.png';
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
      background: 'white',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    },
    '& h2': {
      color: 'white',
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword({
      showPassword: !showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function createacc() {

    let item = { email, password }

    let result = await fetch('https://dubium-apis.herokuapp.com/account/signup/', {
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
          <img src={login} alt="Login_template" className="login_image" />;
        </Grid>
        <div className="content">
          <center><h2>Create Your Account</h2></center>
          <Grid item md={6} sm={12}>
              <TextField
                label="Email"
                variant="filled"
                value={email.trim()}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: 4 }}
              /><br />
              <TextField
                label="Password"
                variant="filled"
                type="password"
                value={password.trim()}
                required
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
              /><br />
              <TextField
                label="Re-enter"
                variant="filled"
                type="password"
                required
                value={repassword.trim()}
                onChange={(e) => setRePassword(e.target.value)}
                style={{ borderRadius: 4 }}
              /><br />
              <Link to="/Username">
                <Button type="submit" variant="contained" className="signup" style={{ width: 300 }} onClick={createacc}>
                  SignUp
                </Button>
              </Link>
              <br />
              <Link to="/" variant="body2">
                <h6>Already have an acccount? Sign in</h6>
              </Link>
          </Grid>
        </div>
      </Grid>
    </div>
  )
}

export default SignUp
