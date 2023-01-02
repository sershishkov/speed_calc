import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { genExample__DivBySimpleNumber } from '../../../utils/generateExample';

import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseDivisionSimple from '../../../components/lessons/exercises/ExerciseDivisionSimple';
import ReportDivisionWithRest from '../../../components/lessons/reports/ReportDivisionWithRest';

import { I_example_SimplDivWithRest_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description1 from '../../../components/descriptions/lessons/level_6/divBySingleNumber/Description1';

const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
  userAnswerRem: '',

  tempUserDigit_1: '',
  tempUserDigit_2: '',
  tempUserDigit_3: '',
  tempUserDigit_4: '',
  tempUserDigit_5: '',
  tempUserDigit_6: '',
  tempUserDigit_7: '',
  tempAnswerRem_1: '',
  tempAnswerRem_2: '',

  dividentHintTemp2: '',
  dividentHintTemp3: '',
  dividentHintTemp4: '',
  dividentHintTemp5: '',
  dividentHintTemp6: '',
  dividentHintTemp7: '',

  dividentHint2: '',
  dividentHint3: '',
  dividentHint4: '',
  dividentHint5: '',
  dividentHint6: '',
  dividentHint7: '',
};

function DivisionBySingleNumber() {
  const showMiddleRow = false;
  const [min, set__min] = useState('1');
  const [max, set__max] = useState('9999999');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<genExample__DivBySimpleNumber>();
  const [arrOfDivident, set__arrOfDivident] = useState<string[]>([]);
  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);

  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState<
    I_example_SimplDivWithRest_Obj[]
  >([]);

  const { time, start, pause, reset } = useTimer();

  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
    userAnswerRem,
    tempUserDigit_1,
    tempUserDigit_2,
    tempUserDigit_3,
    tempUserDigit_4,
    tempUserDigit_5,
    tempUserDigit_6,
    tempUserDigit_7,
    tempAnswerRem_1,
    tempAnswerRem_2,

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
  } = userAnswers;

  const onStart = () => {
    set__displayExample(true);
    set__displaySettings(false);
    nextTask();
    start();
  };
  const onStopExercise = () => {
    set__displayExample(false);
    set__displaySettings(true);
    reset();
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__resultsList([]);
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
  };

  const nextTask = () => {
    const newExample = new genExample__DivBySimpleNumber(Number(max));
    const newArrOfDivident = newExample.divident.toString().split('');
    set__example(newExample);
    set__arrOfDivident(newArrOfDivident);
    set_numberOf_Task((prevState) => prevState + 1);

    if (showMiddleRow) {
      const tempUserDigit_1__input = document.getElementById('tempUserDigit_1');
      tempUserDigit_1__input!.focus();
    } else {
      const userDigit_1_Input = document.getElementById('userDigit_1');

      userDigit_1_Input!.focus();
    }
  };

  const onContinue = () => {
    nextTask();

    reset();
    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__resultsList([]);
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
  };

  const onAnswer = () => {
    const userResult = `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`;
    const doneResult = +userResult - example!.resultRight === 0;
    const doneReminder = +userAnswerRem - example!.reminderOfDivision === 0;

    const obj = {
      example: `${example!.divident}/${example!.divider_Total}`,
      userResult,
      userAnswerRem,
      resultRight: example!.resultRight,
      reminderOfDivision: example!.reminderOfDivision,
      doneExcercise: doneResult && doneReminder,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);

    if (Number(numberOf_Task) < Number(examplesNumber)) {
      nextTask();
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
    }
  };

  const onChangeUserAnswers = (e: React.ChangeEvent<HTMLInputElement>) => {
    set__userAnswers({
      ...userAnswers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Деление в столбик</title>
        <meta name='description' content='Деление в столбик ' />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_5/squaring_ending_9'
          hrefNext='/lessons/level_6/division_by_multipliers'
          time={time}
          title='Деление в столбик '
        />

        <Description1 />

        <Settings
          onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
          onChangeMin={(e) => set__min(e.target.value)}
          onChangeMax={(e) => set__max(e.target.value)}
          onStart={onStart}
          examplesNumber={examplesNumber}
          min={min}
          max={max}
          displaySettings={displaySettings}
          displayMin={false}
          displayMax={false}
          displayShowHints={false}
          showHints={false}
          onChangeShowHints={() => {}}
        />

        <ExerciseDivisionSimple
          displayExample={displayExample}
          onStopExercise={onStopExercise}
          example={example!}
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
          arrOfDivident={arrOfDivident}
          onChangeUserAnswers={onChangeUserAnswers}
          tempUserDigit_1={tempUserDigit_1}
          tempUserDigit_2={tempUserDigit_2}
          tempUserDigit_3={tempUserDigit_3}
          tempUserDigit_4={tempUserDigit_4}
          tempUserDigit_5={tempUserDigit_5}
          tempUserDigit_6={tempUserDigit_6}
          tempUserDigit_7={tempUserDigit_7}
          tempAnswerRem_1={tempAnswerRem_1}
          tempAnswerRem_2={tempAnswerRem_2}
          userAnswerRem={userAnswerRem}
          userDigit_1={userDigit_1}
          userDigit_2={userDigit_2}
          userDigit_3={userDigit_3}
          userDigit_4={userDigit_4}
          userDigit_5={userDigit_5}
          userDigit_6={userDigit_6}
          userDigit_7={userDigit_7}
          dividentHintTemp2={dividentHintTemp2}
          dividentHintTemp3={dividentHintTemp3}
          dividentHintTemp4={dividentHintTemp4}
          dividentHintTemp5={dividentHintTemp5}
          dividentHintTemp6={dividentHintTemp6}
          dividentHintTemp7={dividentHintTemp7}
          dividentHint2={dividentHint2}
          dividentHint3={dividentHint3}
          dividentHint4={dividentHint4}
          dividentHint5={dividentHint5}
          dividentHint6={dividentHint6}
          dividentHint7={dividentHint7}
          showMiddleRow={showMiddleRow}
        />

        <ReportDivisionWithRest
          displayStatistics={displayStatistics}
          resultsList={resultsList}
          onContinue={onContinue}
        />
      </Grid>
    </>
  );
}

export default DivisionBySingleNumber;
