import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { genExample__SquaringEnding_1 } from '../../../utils/generateExample';

import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseSquaringSimple from '../../../components/lessons/exercises/ExerciseSquaringSimple';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description1 from '../../../components/descriptions/lessons/level_5/squaringEnding1/Description1';

function SquaringEnding1() {
  const [max, set__max] = useState('200');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<genExample__SquaringEnding_1>();
  const [userAnswer, set__userAnswer] = useState('');
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);

  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState<I_example_simple_Obj[]>([]);

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
    set__example(new genExample__SquaringEnding_1(Number(max)));
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
        <title>Возведение в квадрат чисел оканчивающихся на 1</title>
        <meta
          name='description'
          content='Возведение в квадрат чисел оканчивающихся на 1 '
        />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_5/squaring_close_to_500'
          hrefNext='/lessons/level_5/squaring_ending_9'
          time={time}
          title='Возведение в квадрат чисел оканчивающихся на 1 '
        />

        <Description1 />

        <Settings
          onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
          onChangeMin={() => {}}
          onChangeMax={(e) => set__max(e.target.value)}
          onStart={onStart}
          examplesNumber={examplesNumber}
          min={'1'}
          max={max}
          displaySettings={displaySettings}
          displayMin={false}
          displayMax={true}
          displayShowHints={false}
          showHints={false}
          onChangeShowHints={() => {}}
        />

        <ExerciseSquaringSimple
          displayExample={displayExample}
          onStopExercise={onStopExercise}
          example={example!}
          userAnswer={userAnswer}
          onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
          showHints={false}
          refNumber={0}
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

export default SquaringEnding1;
