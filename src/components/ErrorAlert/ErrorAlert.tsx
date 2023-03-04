import React, { FC } from 'react';
import { Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ErrorAlertProps {
  errorText: string
}

const ErrorAlert: FC<ErrorAlertProps> = ({ errorText }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Alert severity="error">
        {t(errorText)}
      </Alert>
    </motion.div>
  );
};

export default React.memo(ErrorAlert);
