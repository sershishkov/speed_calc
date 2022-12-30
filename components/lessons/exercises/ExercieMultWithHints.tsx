import { useEffect } from 'react';

import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';

import { operators } from '../../../utils/constants';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';

import DescrCellMain from '../../ui/description/DescrCellMain';
import ExerciseHeader from '../../ui/description/ExerciseHeader';
import DescrCellRoundHintNumber from '../../ui/description/DescrCellRoundHintNumber';
import DescrCellRoundRefNumber from '../../ui/description/DescrCellRoundRefNumber';
import InputUserAnswerSimple from '../../ui/inputs/InputUserAnswerSimple';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

function ExercieMultWithHints({
  displayExample,
  onStopExercise,
  example,
  operator,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
  showHints,
  showPlusHints,
  showMinusHints,
  refNumber,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: generateExample__AddMultSub;
  operator: string;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
  showHints: boolean;
  showPlusHints: boolean;
  showMinusHints: boolean;
  refNumber: number;
}) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input!.focus();
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

      <Grid container justifyContent='space-evenly' alignItems='center'>
        <TableContainer
          component={Paper}
          sx={
            {
              // width: '90%',
              //  margin: 'auto'
            }
          }
        >
          <Table align='center' aria-label='simple table'>
            <TableBody
              sx={
                {
                  //  position: matches ? 'static' : 'relative'
                }
              }
            >
              <TableRow
                sx={{
                  display: showHints && showPlusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell
                  sx={{
                    pr: 0,
                  }}
                >
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft > refNumber
                        ? `${+example.numberLeft - refNumber}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberRight > refNumber
                        ? `${example.numberRight - refNumber}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <DescrCellRoundRefNumber text={`${refNumber}`} />
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>
                    {example ? example.numberLeft : ''}
                  </DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>{operator}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>
                    {example ? example.numberRight : ''}
                  </DescrCellMain>
                </TableCell>
                <TableCell
                  sx={
                    {
                      // display: matches ? 'table-cell' : 'none',
                    }
                  }
                >
                  <DescrCellMain align='center'>{operators[4]}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <InputUserAnswerSimple
                    // display={matches ? 'block' : undefined}
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
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: showHints && showMinusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft < refNumber
                        ? `${refNumber - example.numberLeft}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberRight < refNumber
                        ? `${refNumber - example.numberRight}`
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={6}>
                  <ButtonOk
                    id='answerButton'
                    onClick={onAnswer}
                    disabled={userAnswer.length < 1}
                    tabIndex={undefined}
                  >
                    {numberOf_Task}
                  </ButtonOk>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ExercieMultWithHints;
