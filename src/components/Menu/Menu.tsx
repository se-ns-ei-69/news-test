import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import MenuItem from '../MenuItem/MenuItem';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import LogoutButton from '../LogoutButton/LogoutButton';
import ChangeLng from '../ChangeLng/ChangeLng';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState<string>(location.pathname);
  console.log('render');

  const navigate = useNavigate();

  const handleListItemClick = (path: string) => navigate(path);

  useEffect(() => {
    setSelectedPath(location.pathname);
  }, [location.pathname]);

  return (
    <Toolbar
      style={{ padding: 0 }}
      sx={
        {
          minHeight: '0',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between'
        }
      }
    >
      <List
        component="nav"
        sx={
          {
            padding: '0',
            display: 'flex',
            flexDirection: 'row'
          }
        }
      >
        <MenuItem
          path='/'
          title='pages.home'
          selected={selectedPath}
          handleClick={handleListItemClick}
        />
        <MenuItem
          path='/news'
          title='pages.news'
          selected={selectedPath}
          handleClick={handleListItemClick}
        />
      </List>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <MenuItem
          path='/profile'
          title='pages.profile'
          selected={selectedPath}
          handleClick={handleListItemClick}
        />
        <LogoutButton/>
        <ChangeLng />
      </Box>
    </Toolbar>
  );
};

export default Menu;
