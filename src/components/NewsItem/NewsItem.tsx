import React, { FC } from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { News } from '../../store/slices/news/newsSlice';
import { motion } from 'framer-motion';
import DeleteButton from '../DeleteButton/DeleteButton';

interface NewsItemProps {
  data: News
}

const NewsItem: FC<NewsItemProps> = ({ data }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ opacity: { duration: 0.5 }, y: { duration: 0.4 } }}
      component={motion.div}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {data.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.body}
        </Typography>
      </CardContent>
      <CardActions>
        <DeleteButton id={data.id}/>
      </CardActions>
    </Card>
  );
};

export default React.memo(NewsItem);
