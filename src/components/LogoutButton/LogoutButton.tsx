import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import { openDialog } from '../../store/slices/main/mainSlice';

const LogoutButton = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogoutClick = useCallback(() => {
    dispatch(openDialog());
  }, []);

  return (
    isAuth ?
      <Button
        startIcon={<LogoutIcon/>}
        variant="text"
        sx={{ color: '#fff' }}
        onClick={handleLogoutClick}
      >
        {t('buttons.logout')}
      </Button> : null
  );
};

export default LogoutButton;
