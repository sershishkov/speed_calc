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
// import DescrCellRoundRefNumber from '../../ui/description/DescrCellRoundRefNumber';s
import InputUserAnswerSimple from '../../ui/inputs/InputUserAnswerSimple';
// import HintOperator from '../../ui/excerises/HintOperator';
import NumberPower from '../../ui/excerises/NumberPower';

import {
  genExample__SquaringEnding_5,
  genExample__SquaringCloseTo_,
} from '../../../utils/generateExample';

function ExerciseSquaringSimple({
  displayExample,
  onStopExercise,
  example,
  userAnswer,
  onChangeUserAnswer,
  onAnswer,
  numberOf_Task,
  showHints,
  refNumber,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: genExample__SquaringEnding_5 | genExample__SquaringCloseTo_;
  userAnswer: string;
  onChangeUserAnswer: React.ChangeEventHandler<HTMLInputElement>;
  onAnswer: () => void;
  numberOf_Task: number;
  showHints: boolean;
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
          sx={{
            width: '70%',
            margin: 'auto',
            minWidth: '350px',
          }}
        >
          <Table align='center' aria-label='simple table'>
            <TableBody>
              <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>+</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && example.number_1 > refNumber
                        ? `${+example.number_1 - refNumber}`
                        : ''
                    }
                  />
                </TableCell>

                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {/* <DescrCellRoundRefNumber text={refNumber} /> */}
                </TableCell>
                <TableCell
                  sx={{
                    position: 'relative',
                    // padding: 0,
                    // border: '1px solid red',
                  }}
                >
                  <DescrCellMain align='center'>
                    {example ? `${example.number_1}` : ''}
                  </DescrCellMain>
                  <NumberPower>2</NumberPower>
                </TableCell>

                <TableCell>
                  <DescrCellMain align='center'>{operators[4]}</DescrCellMain>
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>

              <TableRow sx={{ display: showHints ? 'table-row' : 'none' }}>
                <TableCell sx={{ pr: 0 }}>
                  <DescrCellMain align='right'>-</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellRoundHintNumber
                    text={
                      example && +example.number_1 < refNumber
                        ? `${refNumber - +example.number_1}`
                        : ''
                    }
                  />
                </TableCell>

                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
                <TableCell>
                  <DescrCellMain align='right'>{''}</DescrCellMain>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={4}>
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

export default ExerciseSquaringSimple;
