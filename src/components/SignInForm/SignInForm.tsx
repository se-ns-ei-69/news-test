import React, { useCallback, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/AuthService/authService';
import { login } from '../../store/slices/auth/authSlice';
import LoginButton from '../LoginButton/LoginButton';
import ErrorAlert from '../ErrorAlert/ErrorAlert';

const SignInForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setShowError(false);
      const data = new FormData(event.currentTarget);
      const user =
      authService(
        {
          username: data.get('username'),
          password: data.get('password')
        }
      );
      if (user.auth) {
        dispatch(login());
        navigate('/profile', { replace: true });
      } else {
        setShowError(user.error);
      }
    }, []);
  return (
    <>
      <CssBaseline />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {showError && <ErrorAlert errorText='errors.authError'/> }
        <LoginButton/>
      </Box>
    </>
  );
};

export default SignInForm;
