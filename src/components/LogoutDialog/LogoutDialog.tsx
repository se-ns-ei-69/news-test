import React, { useCallback } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { closeDialog } from '../../store/slices/main/mainSlice';
import { logout } from '../../store/slices/auth/authSlice';
import Button from '@mui/material/Button';

const LogoutDialog = () => {
  const isOpen = useAppSelector((state) => state.main.logoutModalIsOpen);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = useCallback(() => {
    dispatch(closeDialog());
  }, []);

  const handleAgree = useCallback(() => {
    dispatch(logout());
    dispatch(closeDialog());
    if (location.pathname === '/profile') {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t('modals.logout.description')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={handleClose}
          autoFocus
        >
          {t('modals.logout.buttons.disagree')}
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={handleAgree}
        >
          {t('modals.logout.buttons.agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
