import React, { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

interface CardItemProps {
  data: {
    id: number,
    image: string,
    title: string
  }
}

const CardItem: FC<CardItemProps> = ({ data }) => {
  return (
    <Grid xs={10} sm={6} md={4}>
      <Card>
        <CardMedia
          sx={{ height: 240 }}
          image={data.image}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {data.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
