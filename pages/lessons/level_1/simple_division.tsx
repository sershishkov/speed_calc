import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { generateExample__SimpleDivision } from '../../../utils/generateExample';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseSimple from '../../../components/lessons/exercises/ExerciseSimple';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

function SimpleDivision() {
  const [min, set__min] = useState('1');
  const [max, set__max] = useState('100');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<generateExample__SimpleDivision>();
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
    set__example(new generateExample__SimpleDivision(Number(max)));
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
      example: `${example!.numberLeft} ${operators[3]} ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultDivision,
      done: +userAnswer === +example!.resultDivision,
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
        <title>Простое деление</title>
        <meta name='description' content='Простое деление чисел' />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_1/simple_multiplication'
          hrefNext='/lessons/level_2/ref_number_10'
          time={time}
          title='Простое деление чисел'
        />

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
          displayMax={true}
          displayShowHints={false}
          showHints={false}
          onChangeShowHints={() => {}}
        />

        <ExerciseSimple
          onStopExercise={onStopExercise}
          onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
          onAnswer={onAnswer}
          example={example!}
          operator={operators[3]}
          userAnswer={userAnswer}
          numberOf_Task={numberOf_Task}
          displayExample={displayExample}
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

export default SimpleDivision;
