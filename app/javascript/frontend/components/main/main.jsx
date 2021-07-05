import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import SignUpFormContainer from '../session_form/signup_form_container';
import LoginFormContainer from '../session_form/login_form_container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const MainPage = (props) => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    formType: "login",
    formText: "Login to see Tweets from your friends!"
  })

  const handleClick = (e) => {
    e.preventDefault();
    const newFormType = formValues.formType === 'signup' ? 'login' : 'signup';
    const newFormText = formValues.formText === 'Sign up to see Tweets from your friends!' ? 'Login to see Tweets from your friends!' : 'Sign up to see Tweets from your friends!';

    setFormValues({
      formType: newFormType,
      formText: newFormText
    })
  }

  const otherFormBtn = (formValues.formType === 'signup') ? 'Login Instead' : 'Sign Up Instead';
  const currentFormType = (formValues.formType === 'signup') ? <SignUpFormContainer /> : <LoginFormContainer />

  return (
      <div className={classes.root}>
        <Typography variant="h6">
          {formValues.formText}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
        >
          {otherFormBtn}
        </Button>
        {currentFormType}
      </div>
  )
}

export default MainPage;