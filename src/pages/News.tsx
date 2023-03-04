import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getNews } from '../store/slices/news/newsSlice';
import NewsContainer from '../components/NewsContainer/NewsContainer';

const News = () => {
  const currentPage = useAppSelector((state) => state.news.currentPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews(currentPage));
  }, []);

  return (
    <NewsContainer/>
  );
};

export default News;
