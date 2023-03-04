import Grid from '@mui/material/Unstable_Grid2';
import React, { useMemo } from 'react';
import CardItem from '../CardItem/CardItem';
import image1 from '../../static/images/1.webp';
import image2 from '../../static/images/2.webp';
import image3 from '../../static/images/3.webp';

const cards = [
  {
    id: 1,
    title: 'On a basement wall, ' +
      'drawings show the spirit, and grief, of imprisoned children.',
    image: image1
  },
  {
    id: 2,
    title: 'A game called checkpoint: Children mimic what they see.',
    image: image2
  },
  {
    id: 3,
    title: '‘I’ve already gotten used to it’: The girl on the front line.',
    image: image3
  }
];

const CardsList = () => {
  const memoizedCards = useMemo(() => {
    return cards.map((data) => {
      return (
        <CardItem key={data.id} data={data}/>
      );
    });
  }, [cards]);
  return (
    <Grid
      container
      sx={
        {
          justifyContent: 'center'
        }
      }
      rowSpacing={2}
      columnSpacing={
        {
          xs: 1,
          sm: 2,
          md: 3
        }
      }
    >
      {memoizedCards}
    </Grid>
  );
};

export default CardsList;
