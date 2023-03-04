import React from 'react';
import { AppBar } from '@mui/material';
import Container from '@mui/material/Container';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <>
      <AppBar
        color="secondary"
        variant="elevation"
        position="static"
        sx={{ marginBottom: '10px' }}
      >
        <Container maxWidth="lg">
          <Menu/>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
