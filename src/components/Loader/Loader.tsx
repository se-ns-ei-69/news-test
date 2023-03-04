import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

const Loader = () => {
  const { t } = useTranslation();
  return (
    <Box>
      {t('messages.loading')}
    </Box>
  );
};
export default Loader;
