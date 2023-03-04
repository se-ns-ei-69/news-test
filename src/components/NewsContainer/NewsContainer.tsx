import React from 'react';
import { Stack } from '@mui/material';
import NewsList from '../NewsList/NewsList';
import LoadingButtonCustom from '../LoadingButton/LoadingButton';

const NewsContainer = () => {
  return (
    <Stack spacing={2}>
      <NewsList/>
      <LoadingButtonCustom/>
    </Stack>
  );
};

export default NewsContainer;
