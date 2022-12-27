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
import DescrCellRoundRefNumberBig from '../../ui/description/DescrCellRoundRefNumberBig';
import InputUserAnswerSimple from '../../ui/inputs/InputUserAnswerSimple';

function ExerciseMultWithHintsTwoRef({
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
  referenceNumber1,
  referenceNumber2,
}) {
  useEffect(() => {
    if (displayExample) {
      const userAnswer__input = document.getElementById('userAnswer');
      userAnswer__input.focus();
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
              // width: '70%',
              // margin: 'auto',
            }
          }
        >
          <Table align='center' aria-label='simple table'>
            <TableBody>
              <TableRow
                sx={{
                  display: showHints && showPlusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft > referenceNumber1
                        ? (example.numberLeft - referenceNumber1) *
                          referenceNumber2
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell></TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'></DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: showHints && showPlusHints ? 'table-row' : 'none',
                }}
              >
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.numberLeft > referenceNumber1
                        ? example.numberLeft - referenceNumber1
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
                      example &&
                      example.numberRight > referenceNumber1 * referenceNumber2
                        ? referenceNumber1 * referenceNumber2 -
                          example.numberRight
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'></DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <DescrCellRoundRefNumberBig
                    text={`${referenceNumber1}x${referenceNumber2}`}
                  />
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'>
                    {example ? `${example.numberLeft}` : ''}
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
                <TableCell>
                  <DescrCellMain variant='h3' align='center'>
                    {operators[4]}
                  </DescrCellMain>
                </TableCell>
                <TableCell>
                  <InputUserAnswerSimple
                    name='userAnswer'
                    label='Ответ'
                    type='number'
                    id='userAnswer'
                    value={userAnswer}
                    onChange={onChangeUserAnswer}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const answerButton =
                          document.getElementById('answerButton');

                        answerButton.focus();
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
                      example && example.numberLeft < referenceNumber1
                        ? referenceNumber1 - example.numberLeft
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
                      example &&
                      example.numberRight < referenceNumber1 * referenceNumber2
                        ? referenceNumber1 * referenceNumber2 -
                          example.numberRight
                        : ''
                    }
                  />
                </TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'></DescrCellMain>
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
                      example && example.numberLeft < referenceNumber1
                        ? (referenceNumber1 - example.numberLeft) *
                          referenceNumber2
                        : ''
                    }
                  />
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell></TableCell>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'></DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='center'></DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={8}>
                  <ButtonOk
                    id='answerButton'
                    variant='contained'
                    onClick={onAnswer}
                    disabled={userAnswer.length < 1}
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

export default ExerciseMultWithHintsTwoRef;
