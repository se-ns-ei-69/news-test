import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../store/store';
import { removeNews } from '../../store/slices/news/newsSlice';
import { Button } from '@mui/material';

interface DeleteButtonProps {
  id: number
}

const DeleteButton: FC<DeleteButtonProps> = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleRemoveNews = useCallback((id: number) => {
    dispatch(removeNews(id));
  }, []);

  return (
    <Button
      size="small"
      color="error"
      onClick={() => handleRemoveNews(id)}
    >
      {t('buttons.delete')}
    </Button>
  );
};

export default React.memo(DeleteButton);
