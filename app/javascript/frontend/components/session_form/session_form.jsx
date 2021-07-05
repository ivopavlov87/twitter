import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SessionForm = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value)
  }

  const updatePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let user;
    if (props.formType === "signup") {
      const newUser = {
        username: username,
        password: password,
      };
      user = Object.assign({}, newUser);
    } else {
      const returningUser = {
        username: username,
        password: password,
      };
      user = Object.assign({}, returningUser);
    }
    props.processForm(user)
  }

  const prettyDemoUser = async (e) => {
    e.preventDefault();

    const demoUser = {
      username: "demoUser",
      password: "pa5Sword!",
    };

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    document.getElementById("username-input").focus();
    for (let i = 1; i <= demoUser.username.length; i++) {
      setUsername(demoUser.username.substr(0, i));
      await sleep(100);
    }

    await sleep(100);

    document.getElementById("password-input").focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      setPassword(demoUser.password.substr(0, i));
      await sleep(100);
    }

    await sleep(100);

    document.getElementById("login-btn").click();
  }

  const renderErrors = () => {
    return (
      <ul className="errors">
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  if (props.formType === "login") {
    return (
      <div>
        <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            id="username-input"
            type="text"
            value={username}
            label="Username"
            onChange={updateUsername}
            variant="outlined"
          />
          <br />
          <TextField
            id="password-input"
            type="password"
            value={password}
            label="Password"
            onChange={updatePassword}
            variant="outlined"
          />
          <br />
          <Button id="login-btn" variant="contained" type="submit" color="primary">
            Login
          </Button>
          <br />
          <Button variant="contained" onClick={prettyDemoUser} color="secondary">
            Demo Login
          </Button>
        </form>
        <div>{renderErrors()}</div>
      </div>
    )
  }

  if (props.formType === "signup") {
    return (
      <div>
        <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            id="new-username-input"
            type="text"
            value={username}
            label="Username"
            onChange={updateUsername}
            variant="outlined"
          />
          <br />
          <TextField
            id="new-password-input"
            type="password"
            value={password}
            label="Password"
            onChange={updatePassword}
            variant="outlined"
          />
          <br />
          <Button id="sign-up-btn" variant="contained" type="submit" color="primary">
            Sign Up
          </Button>
        </form>
        <div>{renderErrors()}</div>
      </div>
    )
  }
}

export default SessionForm;