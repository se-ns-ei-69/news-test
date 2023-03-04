import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import LogoutDialog from './components/LogoutDialog/LogoutDialog';

const App = () => {
  return (
    <>
      <Header/>
      <Container
        maxWidth="lg"
        sx={
          {
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
          }
        }
      >
        <Outlet/>
      </Container>
      <LogoutDialog/>
    </>
  );
};

export default App;
