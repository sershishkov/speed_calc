import NumberForAdditionColumn from '../../ui/excerises/NumberForAdditionColumn';
import InputDigitForAddingColumn from '../../ui/inputs/InputDigitForAddingColumn';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';

import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';
import ExerciseHeader from '../../ui/description/ExerciseHeader';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

function ExerciseColumnAdding({
  displayExample,
  example,
  onChangeUserAnswers,
  userDigit_1,
  userDigit_2,
  userDigit_3,
  userDigit_4,
  userDigit_5,
  userDigit_6,
  userDigit_7,
  onAnswer,
  numberOf_Task,
  onStopExercise,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: generateExample__AddMultSub;
  onChangeUserAnswers: React.ChangeEventHandler<HTMLInputElement>;
  userDigit_1: string;
  userDigit_2: string;
  userDigit_3: string;
  userDigit_4: string;
  userDigit_5: string;
  userDigit_6: string;
  userDigit_7: string;
  onAnswer: () => void;
  numberOf_Task: number;
}) {
  useEffect(() => {
    if (displayExample) {
      const userDigit_7 = document.getElementById('userDigit_7');
      userDigit_7!.focus();
    }
  }, [displayExample]);
  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid item sx={{ flex: 1, padding: '10px' }}>
        <ButtonStop onClick={onStopExercise} />
      </Grid>
      <Grid item sx={{ flex: 1 }}>
        <ExerciseHeader align='center'>
          Решите пример № {numberOf_Task}
        </ExerciseHeader>
      </Grid>

      <Grid
        container
        alignItems='center'
        justifyContent='flex-start'
        flexDirection='column'
        sx={{
          // border: '1px solid red',
          width: '200px',
          margin: 'auto',
        }}
      >
        <Grid
          item
          sx={{
            // border: '1px solid blue',
            width: '100%',
          }}
        >
          <NumberForAdditionColumn>
            {example ? `${example.numberLeft}` : ''}
          </NumberForAdditionColumn>
        </Grid>
        <Grid
          item
          sx={{
            borderBottom: '4px solid black',
            width: '100%',
          }}
        >
          <NumberForAdditionColumn>
            {example ? `${example.numberRight}` : ''}
          </NumberForAdditionColumn>
        </Grid>
        <Grid
          item
          sx={{
            margin: '0.5rem 0',
            // border: '1px solid blue',
            width: '100%',
          }}
        >
          <Grid
            container
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
          >
            <InputDigitForAddingColumn
              name='userDigit_1'
              id='userDigit_1'
              value={userDigit_1}
              onChange={onChangeUserAnswers}
              tabIndex={7}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const answerButton = document.getElementById('answerButton');
                  answerButton!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_2'
              id='userDigit_2'
              value={userDigit_2}
              onChange={onChangeUserAnswers}
              tabIndex={6}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_1_Input =
                    document.getElementById('userDigit_1');
                  userDigit_1_Input!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_3'
              id='userDigit_3'
              value={userDigit_3}
              onChange={onChangeUserAnswers}
              tabIndex={5}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_2_Input =
                    document.getElementById('userDigit_2');
                  userDigit_2_Input!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_4'
              id='userDigit_4'
              value={userDigit_4}
              onChange={onChangeUserAnswers}
              tabIndex={4}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_3_Input =
                    document.getElementById('userDigit_3');
                  userDigit_3_Input!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_5'
              id='userDigit_5'
              value={userDigit_5}
              onChange={onChangeUserAnswers}
              tabIndex={3}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_4_Input =
                    document.getElementById('userDigit_4');
                  userDigit_4_Input!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_6'
              id='userDigit_6'
              value={userDigit_6}
              onChange={onChangeUserAnswers}
              tabIndex={2}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_5_Input =
                    document.getElementById('userDigit_5');
                  userDigit_5_Input!.focus();
                }
              }}
            />

            <InputDigitForAddingColumn
              name='userDigit_7'
              id='userDigit_7'
              value={userDigit_7}
              onChange={onChangeUserAnswers}
              tabIndex={1}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit_6_Input =
                    document.getElementById('userDigit_6');
                  userDigit_6_Input!.focus();
                }
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            // border: '1px solid blue',
            width: '100%',
          }}
        >
          <ButtonOk
            id='answerButton'
            onClick={onAnswer}
            disabled={userDigit_7.length < 1}
            tabIndex={undefined}
          >
            {numberOf_Task}
          </ButtonOk>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExerciseColumnAdding;
