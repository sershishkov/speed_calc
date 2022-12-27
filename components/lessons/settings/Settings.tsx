import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputSettings from '../../ui/inputs/InputSettings';
import ShowHintSwitch from '../../ui/check/ShowHintSwitch';
import ButtonGo from '../../ui/buttons/ButtonGo';

function Settings({
  displaySettings,
  onChangeExamplesNumber,
  examplesNumber,
  onChangeMin,
  min,
  onChangeMax,
  max,
  onStart,
  displayMin,
  displayMax,
  displayShowHints,
  showHints,
  onChangeShowHints,
}: {
  displaySettings: boolean;
  onChangeExamplesNumber: React.ChangeEventHandler<HTMLInputElement>;
  examplesNumber: string;
  onChangeMin: React.ChangeEventHandler<HTMLInputElement>;
  min: string;
  onChangeMax: React.ChangeEventHandler<HTMLInputElement>;
  max: string;
  onStart: React.MouseEventHandler<HTMLButtonElement>;
  displayMin: boolean;
  displayMax: boolean;
  displayShowHints: boolean;
  showHints: boolean;
  onChangeShowHints: React.ChangeEventHandler<HTMLInputElement>;
}) {
  useEffect(() => {
    if (displaySettings) {
      const examples_numberInput = document.getElementById('examples_number');
      examples_numberInput!.focus();
    }
  }, [displaySettings]);

  return (
    <Grid item sx={{ display: displaySettings ? 'block' : 'none' }}>
      <Typography variant='h6' align='center'>
        Настройки
      </Typography>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='column'
      >
        <Grid item>
          <InputSettings
            id='examples_number'
            name='examples_number'
            label='Количество упражнений'
            onChange={onChangeExamplesNumber}
            value={examplesNumber}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (displayMin) {
                  const nextElement = document.getElementById('min');
                  nextElement!.focus();
                } else if (displayMax) {
                  const nextElement = document.getElementById('max');
                  nextElement!.focus();
                } else {
                  const nextElement = document.getElementById('button_go');
                  nextElement!.focus();
                }
              }
            }}
          />
        </Grid>
        <Grid item sx={{ display: displayMin ? 'block' : 'none' }}>
          <InputSettings
            id='min'
            name='min'
            label='Минимальное значение'
            onChange={onChangeMin}
            value={min}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (displayMax) {
                  const nextElement = document.getElementById('max');
                  nextElement!.focus();
                } else {
                  const nextElement = document.getElementById('button_go');
                  nextElement!.focus();
                }
              }
            }}
          />
        </Grid>
        <Grid item sx={{ display: displayMax ? 'block' : 'none' }}>
          <InputSettings
            id='max'
            name='max'
            label='Максимальное значение'
            onChange={onChangeMax}
            value={max}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const nextElement = document.getElementById('button_go');
                nextElement!.focus();
              }
            }}
          />
        </Grid>

        <Grid item sx={{ display: displayShowHints ? 'block' : 'none' }}>
          <ShowHintSwitch
            showHints={showHints}
            onChangeShowHints={onChangeShowHints}
          />
        </Grid>
        <Grid item>
          <ButtonGo onClick={onStart} id='button_go' />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Settings;
