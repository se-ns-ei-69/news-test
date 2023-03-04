import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyList = () => {
  const { t } = useTranslation();
  return (
    <Typography variant='body1'>
      {t('messages.emptyList')}
    </Typography>
  );
};

export default EmptyList;
