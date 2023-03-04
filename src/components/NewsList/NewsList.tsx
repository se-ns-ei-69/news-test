import React, { useMemo } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { useAppSelector } from '../../store/store';
import { Stack } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import EmptyList from '../EmptyList/EmptyList';
import Loader from '../Loader/Loader';

const NewsList = () => {
  const news = useAppSelector((store) => store.news.newsObj);
  const loading = useAppSelector((store) => store.news.isLoading);
  const newsArr = Object.values(news);

  const memoizedNewsList = useMemo(()=> newsArr.map((item) => {
    return <NewsItem key={item.id} data={item}/>;
  }), [newsArr]);

  return (
    <Stack spacing={2} component={motion.div}>
      {!newsArr.length && !loading && <EmptyList/>}
      {loading && !newsArr.length && <Loader/>}
      {!!memoizedNewsList.length &&
        <AnimatePresence>
          {memoizedNewsList}
        </AnimatePresence>}
    </Stack>
  );
};

export default React.memo(NewsList);
