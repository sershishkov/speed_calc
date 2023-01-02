import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { genExample__SquaringCloseTo_ } from '../../../utils/generateExample';

import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseSquaringSimple from '../../../components/lessons/exercises/ExerciseSquaringSimple';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description1 from '../../../components/descriptions/lessons/level_5/squaringClose50/Description1';

function SquaringCloseTo50() {
  const refNumber = 50;
  const [min, set__min] = useState('45');
  const [max, set__max] = useState('62');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<genExample__SquaringCloseTo_>();
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
    set__example(new genExample__SquaringCloseTo_(Number(min), Number(max)));
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
      example: `${example!.number_1}`,
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
        <title>Возведение в квадрат чисел близких к 50</title>
        <meta
          name='description'
          content='Возведение в квадрат чисел близких к 50 '
        />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_5/squaring_ending_5'
          hrefNext='/lessons/level_5/squaring_close_to_500'
          time={time}
          title='Возведение в квадрат чисел близких к 50 '
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
          displayShowHints={true}
          showHints={showHints}
          onChangeShowHints={(e) => set__showHints(e.target.checked)}
        />

        <ExerciseSquaringSimple
          displayExample={displayExample}
          onStopExercise={onStopExercise}
          example={example!}
          userAnswer={userAnswer}
          onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
          showHints={showHints}
          refNumber={refNumber}
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

export default SquaringCloseTo50;
