import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';

import ExerciseHeader from '../../ui/description/ExerciseHeader';

import InputDigitDivisionQuotient from '../../ui/inputs/InputDigitDivisionQuotient';

import { generateExample__MultBy } from '../../../utils/generateExample';

function WrapForInputResult({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      item
      sx={{
        marginLeft: '10px',
      }}
    >
      {children}
    </Grid>
  );
}

function ExerciseMultBy({
  displayExample,
  onStopExercise,
  example,
  onAnswer,
  onChangeUserAnswers,
  numberOf_Task,
  userDigit_1,
  userDigit_2,
  userDigit_3,
  userDigit_4,
  userDigit_5,
  userDigit_6,
  userDigit_7,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: generateExample__MultBy;
  onAnswer: () => void;
  onChangeUserAnswers: React.ChangeEventHandler<HTMLInputElement>;
  numberOf_Task: number;
  userDigit_1: string;
  userDigit_2: string;
  userDigit_3: string;
  userDigit_4: string;
  userDigit_5: string;
  userDigit_6: string;
  userDigit_7: string;
}) {
  useEffect(() => {
    if (displayExample) {
      const userDigit = document.getElementById('userDigit_7');
      userDigit!.focus();
    }
  }, [displayExample]);
  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid item sx={{ flex: 1, padding: '10px' }}>
        <ButtonStop onClick={onStopExercise} />
      </Grid>
      <ExerciseHeader align='center'>
        Решите пример № {numberOf_Task}
      </ExerciseHeader>

      <ExerciseHeader align='center'>
        {example ? `${example.numberLeft} * ${example.numberRight} =` : ''}
      </ExerciseHeader>
      <Box
        sx={{
          width: 'max-content',
          margin: '1rem auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5rem 80px',
        }}
      >
        <Box
          sx={{
            borderBottom: '2px solid black',
          }}
        >
          <Typography
            align='right'
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              letterSpacing: '1rem',
            }}
          >
            {example && example.numberLeft ? `${example.numberLeft}` : ''}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          x
        </Typography>
        <Typography
          align='left'
          sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}
        >
          {example && example.numberRight ? `${example.numberRight}` : ''}
        </Typography>
        <Grid
          container
          sx={{
            marginTop: '0.5rem',
            flexDirection: 'row',
            alignItems: 'center',
            justifyItems: 'flex-end',
            paddingRight: '1rem',
          }}
        >
          <WrapForInputResult>
            <InputDigitDivisionQuotient
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
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_2'
              id='userDigit_2'
              value={userDigit_2}
              onChange={onChangeUserAnswers}
              tabIndex={6}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_1');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_3'
              id='userDigit_3'
              value={userDigit_3}
              onChange={onChangeUserAnswers}
              tabIndex={5}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_2');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_4'
              id='userDigit_4'
              value={userDigit_4}
              onChange={onChangeUserAnswers}
              tabIndex={4}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_3');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_5'
              id='userDigit_5'
              value={userDigit_5}
              onChange={onChangeUserAnswers}
              tabIndex={3}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_4');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_6'
              id='userDigit_6'
              value={userDigit_6}
              onChange={onChangeUserAnswers}
              tabIndex={2}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_5');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
          <WrapForInputResult>
            <InputDigitDivisionQuotient
              name='userDigit_7'
              id='userDigit_7'
              value={userDigit_7}
              onChange={onChangeUserAnswers}
              tabIndex={1}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const userDigit = document.getElementById('userDigit_6');
                  userDigit!.focus();
                }
              }}
            />
          </WrapForInputResult>
        </Grid>

        <Box
          sx={{
            gridColumn: '1 / 4',
          }}
        >
          <ButtonOk
            id='answerButton'
            onClick={onAnswer}
            tabIndex={8}
            disabled={
              `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
                .length < 1
            }
          >
            {numberOf_Task}
          </ButtonOk>
        </Box>
      </Box>
    </Grid>
  );
}

export default ExerciseMultBy;
