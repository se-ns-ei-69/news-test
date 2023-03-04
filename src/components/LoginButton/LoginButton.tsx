import Button from '@mui/material/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      {t('buttons.login')}
    </Button>
  );
};

export default LoginButton;
