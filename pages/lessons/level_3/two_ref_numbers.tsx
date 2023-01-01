import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { genExample_Mult__WithDifferentRangers } from '../../../utils/generateExample';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseMultWithHintsTwoRef from '../../../components/lessons/exercises/ExerciseMultWithHintsTwoRef';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description1 from '../../../components/descriptions/lessons/level_3/twoRefNubers/Description1';
import Description2 from '../../../components/descriptions/lessons/level_3/twoRefNubers/Description2';
import Description3 from '../../../components/descriptions/lessons/level_3/twoRefNubers/Description3';

function RefTwoNumbers() {
  const minLeft = 11;
  const maxLeft = 19;
  const minRight = 90;
  const maxRight = 99;
  const referenceNumber1 = 20;
  const referenceNumber2 = 5;

  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] =
    useState<genExample_Mult__WithDifferentRangers>();
  const [userAnswer, set__userAnswer] = useState('');

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);

  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState<I_example_simple_Obj[]>([]);
  const [showHints, set__showHints] = useState(true);

  const { time, start, pause, reset } = useTimer();

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
    set__userAnswer('');
  };

  const nextTask = () => {
    set__example(
      new genExample_Mult__WithDifferentRangers(
        minLeft,
        maxLeft,
        minRight,
        maxRight
      )
    );
    set_numberOf_Task((prevState) => prevState + 1);
    const userAnswerInput = document.getElementById('userAnswer');
    userAnswerInput!.focus();
  };

  const onContinue = () => {
    nextTask();

    reset();
    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__resultsList([]);
    set__userAnswer('');
  };

  const onAnswer = () => {
    const obj = {
      example: `${example!.numberLeft} ${operators[2]} ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultRight,
      done: +userAnswer === +example!.resultRight,
    };

    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    if (Number(numberOf_Task) < Number(examplesNumber)) {
      nextTask();
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
    }
  };

  return (
    <>
      <Head>
        <title>Умножение с помощью двух опорных чисел</title>
        <meta
          name='description'
          content='Умножение с помощью двух опорных чисел '
        />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_3/decimals'
          hrefNext='/lessons/level_4/addition'
          time={time}
          title='Умножение с помощью двух опорных чисел'
        />
        <Description1 />
        <Description2 />
        <Description3 />

        <Settings
          onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
          onChangeMin={() => {}}
          onChangeMax={() => {}}
          onStart={onStart}
          examplesNumber={examplesNumber}
          min={'0'}
          max={'0'}
          displaySettings={displaySettings}
          displayMin={false}
          displayMax={false}
          displayShowHints={true}
          showHints={showHints}
          onChangeShowHints={(e) => set__showHints(e.target.checked)}
        />

        <ExerciseMultWithHintsTwoRef
          displayExample={displayExample}
          onStopExercise={onStopExercise}
          example={example!}
          operator={operators[2]}
          userAnswer={userAnswer}
          onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
          showHints={showHints}
          showPlusHints={false}
          showMinusHints={true}
          referenceNumber1={referenceNumber1}
          referenceNumber2={referenceNumber2}
        />

        <ReportOnlyResult
          onContinue={onContinue}
          resultsList={resultsList}
          display={displayStatistics}
        />
      </Grid>
    </>
  );
}

export default RefTwoNumbers;
