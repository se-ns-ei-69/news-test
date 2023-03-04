import LoadingButton from '@mui/lab/LoadingButton';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import React, { useCallback, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { useTranslation } from 'react-i18next';
import { getNews, setPage } from '../../store/slices/news/newsSlice';

const LoadingButtonCustom = () => {
  const loading = useAppSelector((state) => state.news.isLoading);
  const currentPage = useAppSelector((state) => state.news.currentPage);
  const { t } = useTranslation();
  const myRef = useRef<null | any>(null);
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(setPage(currentPage + 1));
    dispatch(
      getNews(currentPage + 1))
      .then(() => {
        myRef.current && myRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      );
  }, [currentPage]);

  return (
    <LoadingButton
      ref={myRef}
      size='small'
      sx={{ alignSelf: 'center' }}
      onClick={handleClick}
      loading={loading}
      loadingPosition="start"
      startIcon={<ReadMoreIcon/>}
      variant="outlined"
    >
      <span>
        {t('buttons.loadMore')}
      </span>
    </LoadingButton>
  );
};

export default LoadingButtonCustom;
