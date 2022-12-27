import { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';
import { operators } from '../../../utils/constants';
import DescrCellMain from '../../ui/description/DescrCellMain';
import ExerciseHeader from '../../ui/description/ExerciseHeader';
import InputUserAnswerSimple from '../../ui/inputs/InputUserAnswerSimple';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

function ExerciseSimple({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: generateExample__AddMultSub;
  operator: string;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
}) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input!.focus();
    }
  }, [displayExample]);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid container flexDirection='column'>
        <Grid item sx={{ flex: 1, padding: '10px' }}>
          <ButtonStop onClick={onStopExercise} />
        </Grid>
        <Grid item sx={{ flex: 1 }}>
          <ExerciseHeader align='center'>
            Решите пример № {numberOf_Task}
          </ExerciseHeader>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems='center'
            direction={matches ? 'row' : 'column'}
          >
            <Grid item sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberLeft : ''}
              </DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>{operator}</DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
              <DescrCellMain align='center'>
                {example ? example.numberRight : ''}
              </DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 0.3 }}>
              <DescrCellMain align='center'>{operators[4]}</DescrCellMain>
            </Grid>
            <Grid item sx={{ flex: 1.1 }}>
              <InputUserAnswerSimple
                name='userAnswer'
                label='Ответ'
                id='userAnswer'
                value={userAnswer}
                onChange={onChangeUserAnswer}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const onAnswer_Button =
                      document.getElementById('answerButton');
                    onAnswer_Button!.focus();
                  }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '100%', marginTop: '1rem' }}>
          <ButtonOk
            id='answerButton'
            onClick={onAnswer}
            disabled={userAnswer.length < 1}
            tabIndex={undefined}
          >
            {numberOf_Task}
          </ButtonOk>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExerciseSimple;
