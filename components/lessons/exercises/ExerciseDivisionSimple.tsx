import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import ButtonStop from '../../ui/buttons/ButtonStop';
import ButtonOk from '../../ui/buttons/ButtonOk';

import ExerciseHeader from '../../ui/description/ExerciseHeader';

import DividerSimple from '../../ui/excerises/DividerSimple';
import DividentDigit from '../../ui/excerises/DividentDigit';
import InputDividentHint from '../../ui/inputs/InputDividentHint';
import InputDigitDivisionQuotient from '../../ui/inputs/InputDigitDivisionQuotient';
import InputNumberDivisionRem from '../../ui/inputs/InputNumberDivisionRem';

import {
  genExample__DivBySimpleNumber,
  genExample__DivByMultipliers,
} from '../../../utils/generateExample';

function WrapForInputQuatent({ children }: { children: React.ReactNode }) {
  return (
    <Grid
      item
      sx={{
        position: 'relative',
        marginRight: '10px',
      }}
    >
      {children}
    </Grid>
  );
}

function ExerciseDivisionSimple({
  displayExample,
  onStopExercise,
  example,
  onAnswer,
  numberOf_Task,
  arrOfDivident,
  onChangeUserAnswers,
  tempUserDigit_1,
  tempUserDigit_2,
  tempUserDigit_3,
  tempUserDigit_4,
  tempUserDigit_5,
  tempUserDigit_6,
  tempUserDigit_7,
  tempAnswerRem_1,
  tempAnswerRem_2,
  userAnswerRem,
  userDigit_1,
  userDigit_2,
  userDigit_3,
  userDigit_4,
  userDigit_5,
  userDigit_6,
  userDigit_7,
  showMiddleRow,
  dividentHintTemp2,
  dividentHintTemp3,
  dividentHintTemp4,
  dividentHintTemp5,
  dividentHintTemp6,
  dividentHintTemp7,
  dividentHint2,
  dividentHint3,
  dividentHint4,
  dividentHint5,
  dividentHint6,
  dividentHint7,
}: {
  displayExample: boolean;
  onStopExercise: React.MouseEventHandler<HTMLButtonElement>;
  example: genExample__DivBySimpleNumber | genExample__DivByMultipliers;
  onAnswer: () => void;
  numberOf_Task: number;
  arrOfDivident: string[];
  onChangeUserAnswers: React.ChangeEventHandler<HTMLInputElement>;
  tempUserDigit_1: string;
  tempUserDigit_2: string;
  tempUserDigit_3: string;
  tempUserDigit_4: string;
  tempUserDigit_5: string;
  tempUserDigit_6: string;
  tempUserDigit_7: string;
  tempAnswerRem_1: string;
  tempAnswerRem_2: string;
  userAnswerRem: string;
  userDigit_1: string;
  userDigit_2: string;
  userDigit_3: string;
  userDigit_4: string;
  userDigit_5: string;
  userDigit_6: string;
  userDigit_7: string;
  showMiddleRow: boolean;
  dividentHintTemp2: string;
  dividentHintTemp3: string;
  dividentHintTemp4: string;
  dividentHintTemp5: string;
  dividentHintTemp6: string;
  dividentHintTemp7: string;
  dividentHint2: string;
  dividentHint3: string;
  dividentHint4: string;
  dividentHint5: string;
  dividentHint6: string;
  dividentHint7: string;
}) {
  useEffect(() => {
    if (displayExample && showMiddleRow) {
      const tempUserDigit_1__input = document.getElementById('tempUserDigit_1');
      tempUserDigit_1__input!.focus();
    } else if (displayExample && !showMiddleRow) {
      const userDigit_1_Input = document.getElementById('userDigit_1');

      userDigit_1_Input!.focus();
    }
  }, [displayExample, showMiddleRow]);

  const arrDividentHints = [
    '',
    dividentHint2,
    dividentHint3,
    dividentHint4,
    dividentHint5,
    dividentHint6,
    dividentHint7,
  ];
  return (
    <Grid item sx={{ display: displayExample ? 'block' : 'none' }}>
      <Grid item sx={{ flex: 1, padding: '10px' }}>
        <ButtonStop onClick={onStopExercise} />
      </Grid>
      <ExerciseHeader align='center'>
        Решите пример № {numberOf_Task}
      </ExerciseHeader>

      <ExerciseHeader align='center'>
        {example ? `${example.divident} / ${example.divider_Total} =` : ''}
      </ExerciseHeader>

      <Grid container justifyContent='space-evenly' alignItems='center'>
        <TableContainer component={Paper}>
          <Table
            sx={{
              // width: '400px',
              width: 'max-content',
              margin: '2rem auto',
              'th,td': {
                padding: 0,
              },
            }}
          >
            <TableBody sx={{}}>
              <TableRow>
                <TableCell>
                  <DividerSimple>
                    {example && showMiddleRow
                      ? example instanceof genExample__DivByMultipliers
                        ? `${example.divider_1}`
                        : '0'
                      : example && !showMiddleRow
                      ? `${example.divider_Total}`
                      : ''}
                  </DividerSimple>
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: '2px solid black',
                    borderBottom: '2px solid black',
                  }}
                >
                  {arrOfDivident && arrOfDivident.length > 0 ? (
                    <Grid
                      container
                      sx={{
                        // border: '1px solid blue',
                        justifyContent: 'flex-start',
                        alignItems: 'center',

                        flexDirection: 'row',
                      }}
                    >
                      {arrOfDivident.map((item, index) => (
                        <Grid
                          item
                          sx={{
                            position: 'relative',
                            marginRight: '10px',
                          }}
                          key={index}
                        >
                          <InputDividentHint
                            name={`dividentHint${index + 1}`}
                            id={`dividentHint${index + 1}`}
                            display={index === 0 ? false : true}
                            top='-1rem'
                            value={
                              arrDividentHints && arrDividentHints[index]
                                ? arrDividentHints[index]
                                : ''
                            }
                            onChange={onChangeUserAnswers}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                if (showMiddleRow) {
                                  const tempUserDigit = document.getElementById(
                                    `tempUserDigit_${index + 1}`
                                  );
                                  tempUserDigit!.focus();
                                } else {
                                  const userDigit = document.getElementById(
                                    `userDigit_${index + 1}`
                                  );
                                  userDigit!.focus();
                                }
                              }
                            }}
                            tabIndex={index * 2}
                          />

                          <DividentDigit>{`${item}`}</DividentDigit>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    ''
                  )}
                </TableCell>
                <TableCell>
                  <Typography
                    align='center'
                    variant='h6'
                    sx={{ display: showMiddleRow ? 'block' : 'none' }}
                  >
                    Остаток:
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{
                  display: showMiddleRow ? 'table-row' : 'none',
                }}
              >
                <TableCell>
                  <DividerSimple>
                    {example instanceof genExample__DivByMultipliers
                      ? `${example.divider_2}`
                      : ''}
                  </DividerSimple>
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: '2px solid black',
                    borderBottom: '2px solid black',
                    paddingTop: '1rem !important',
                  }}
                >
                  <Grid
                    container
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='flex-end'
                  >
                    <Grid item sx={{ marginRight: '10px' }}>
                      <InputDigitDivisionQuotient
                        name='tempUserDigit_1'
                        id='tempUserDigit_1'
                        value={tempUserDigit_1 ? tempUserDigit_1 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={1}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint2');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </Grid>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp2'
                        id='dividentHintTemp2'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp2 ? dividentHintTemp2 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_2');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={16}
                      />

                      <InputDigitDivisionQuotient
                        name='tempUserDigit_2'
                        id='tempUserDigit_2'
                        value={tempUserDigit_2 ? tempUserDigit_2 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={3}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint3');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp3'
                        id='dividentHintTemp3'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp3 ? dividentHintTemp3 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_3');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={18}
                      />
                      <InputDigitDivisionQuotient
                        name='tempUserDigit_3'
                        id='tempUserDigit_3'
                        value={tempUserDigit_3 ? tempUserDigit_3 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={5}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint4');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp4'
                        id='dividentHintTemp4'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp4 ? dividentHintTemp4 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_4');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={20}
                      />
                      <InputDigitDivisionQuotient
                        name='tempUserDigit_4'
                        id='tempUserDigit_4'
                        value={tempUserDigit_4 ? tempUserDigit_4 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={7}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint5');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp5'
                        id='dividentHintTemp5'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp5 ? dividentHintTemp5 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_5');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={22}
                      />
                      <InputDigitDivisionQuotient
                        name='tempUserDigit_5'
                        id='tempUserDigit_5'
                        value={tempUserDigit_5 ? tempUserDigit_5 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={9}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint6');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp6'
                        id='dividentHintTemp6'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp6 ? dividentHintTemp6 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_6');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={24}
                      />
                      <InputDigitDivisionQuotient
                        name='tempUserDigit_6'
                        id='tempUserDigit_6'
                        value={tempUserDigit_6 ? tempUserDigit_6 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={11}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const dividentHint =
                              document.getElementById('dividentHint7');
                            dividentHint!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDividentHint
                        name='dividentHintTemp7'
                        id='dividentHintTemp7'
                        display={true}
                        top='-1rem'
                        value={dividentHintTemp7 ? dividentHintTemp7 : ''}
                        onChange={onChangeUserAnswers}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userDigit =
                              document.getElementById('userDigit_7');
                            userDigit!.focus();
                          }
                        }}
                        tabIndex={26}
                      />

                      <InputDigitDivisionQuotient
                        name='tempUserDigit_7'
                        id='tempUserDigit_7'
                        value={tempUserDigit_7 ? tempUserDigit_7 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={13}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const userAnswerRem_Input =
                              document.getElementById('tempAnswerRem_1');
                            userAnswerRem_Input!.focus();
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                  </Grid>
                </TableCell>
                <TableCell
                  sx={{
                    padding: '0 15px !important',
                  }}
                >
                  <InputNumberDivisionRem
                    name='tempAnswerRem_1'
                    id='tempAnswerRem_1'
                    tabIndex={14}
                    value={tempAnswerRem_1 ? tempAnswerRem_1 : ''}
                    display={true}
                    onChange={onChangeUserAnswers}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === 'Tab') {
                        const input = document.getElementById('userDigit_1');

                        input!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <Grid
                    container
                    direction='row'
                    justifyContent='flex-start'
                    alignItems='center'
                  >
                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_1'
                        id='userDigit_1'
                        value={userDigit_1 ? userDigit_1 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 15 : 1}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            // console.log(e);
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp2');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint2');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>

                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_2'
                        id='userDigit_2'
                        value={userDigit_2 ? userDigit_2 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 17 : 3}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp3');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint3');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>

                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_3'
                        id='userDigit_3'
                        value={userDigit_3 ? userDigit_3 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 19 : 5}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp4');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint4');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>

                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_4'
                        id='userDigit_4'
                        value={userDigit_4 ? userDigit_4 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 21 : 7}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp5');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint5');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>

                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_5'
                        id='userDigit_5'
                        value={userDigit_5 ? userDigit_5 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 23 : 9}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp6');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint6');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>

                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_6'
                        id='userDigit_6'
                        value={userDigit_6 ? userDigit_6 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 25 : 11}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const dividentHint =
                                document.getElementById('dividentHintTemp7');
                              dividentHint!.focus();
                            } else {
                              const dividentHint =
                                document.getElementById('dividentHint7');
                              dividentHint!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                    <WrapForInputQuatent>
                      <InputDigitDivisionQuotient
                        name='userDigit_7'
                        id='userDigit_7'
                        value={userDigit_7 ? userDigit_7 : ''}
                        onChange={onChangeUserAnswers}
                        tabIndex={showMiddleRow ? 27 : 13}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            if (showMiddleRow) {
                              const userAnswerRem_Input =
                                document.getElementById('tempAnswerRem_2');
                              userAnswerRem_Input!.focus();
                            } else {
                              const userAnswerRem_Input =
                                document.getElementById('userAnswerRem');
                              userAnswerRem_Input!.focus();
                            }
                          }
                        }}
                      />
                    </WrapForInputQuatent>
                  </Grid>
                </TableCell>
                <TableCell
                  sx={{
                    padding: '0 15px !important',
                  }}
                >
                  <InputNumberDivisionRem
                    name='tempAnswerRem_2'
                    id='tempAnswerRem_2'
                    tabIndex={28}
                    value={tempAnswerRem_2 ? tempAnswerRem_2 : ''}
                    onChange={onChangeUserAnswers}
                    display={showMiddleRow}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === 'Tab') {
                        const userAnswerRem =
                          document.getElementById('userAnswerRem');

                        userAnswerRem!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>
                  <Typography align='right' variant='h6'>
                    Остаток пример:
                  </Typography>
                </TableCell>

                <TableCell
                  sx={{
                    padding: '0 15px !important',
                  }}
                >
                  <InputNumberDivisionRem
                    name='userAnswerRem'
                    id='userAnswerRem'
                    tabIndex={showMiddleRow ? 29 : 14}
                    value={userAnswerRem ? userAnswerRem : ''}
                    display={true}
                    onChange={onChangeUserAnswers}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === 'Tab') {
                        const onAnswer_Button =
                          document.getElementById('answerButton');

                        onAnswer_Button!.focus();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={3}>
                  <ButtonOk
                    id='answerButton'
                    onClick={onAnswer}
                    tabIndex={showMiddleRow ? 30 : 15}
                    disabled={
                      `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
                        .length < 1
                    }
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

export default ExerciseDivisionSimple;
