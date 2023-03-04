import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListItemButton, ListItemText } from '@mui/material';

interface MenuItemProps {
  path: string,
  title: string,
  selected: string,
  handleClick: Function
}

const MenuItem: FC<MenuItemProps> = (
  {
    path,
    title,
    selected,
    handleClick
  }
) => {
  const { t } = useTranslation();

  return (
    <ListItemButton
      selected={selected === path}
      onClick={() => handleClick(path)}
    >
      <ListItemText primary={t(title)} />
    </ListItemButton>
  );
};

export default React.memo(MenuItem);
