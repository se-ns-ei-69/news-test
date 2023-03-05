import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setLanguage } from '../../store/slices/main/mainSlice';

const ChangeLng = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(
    (state) => state.main.selectedLanguage
  );

  const changeLanguage = useCallback((lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng).then(() => dispatch(setLanguage(lng)));
    }
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <ToggleButtonGroup
      value={selectedLanguage}
      exclusive
      onChange={(_, value) => value && changeLanguage(value)}
    >
      <ToggleButton value="ua">
        UA
      </ToggleButton>
      <ToggleButton value="en">
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default React.memo(ChangeLng);
