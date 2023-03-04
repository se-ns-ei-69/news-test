import * as React from 'react';
import Container from '@mui/material/Container';
import SignInForm from '../components/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <Container component="main" maxWidth="xs">
      <SignInForm/>
    </Container>
  );
};

export default SignIn;
