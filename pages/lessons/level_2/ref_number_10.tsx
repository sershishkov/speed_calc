import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExercieMultWithHints from '../../../components/lessons/exercises/ExercieMultWithHints';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description from '../../../components/descriptions/lessons/level_2/referenceNumber10/Description.';

function RefNumber10() {
  const [min, set__min] = useState('11');
  const [max, set__max] = useState('21');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<generateExample__AddMultSub>();
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
    set__example(new generateExample__AddMultSub(Number(min), Number(max)));
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
      rightAnswer: example!.resultMult,
      done: +userAnswer === +example!.resultMult,
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
        <title>Умножение чисел с опорным числом 10</title>
        <meta
          name='description'
          content='Умножение чисел с опорным числом 10 '
        />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='//lessons/level_1/simple_division'
          hrefNext='/lessons/level_2/ref_number_20'
          time={time}
          title='Умножение чисел с опорным числом 10'
        />
        <Description />

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

        <ExercieMultWithHints
          onStopExercise={onStopExercise}
          onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
          onAnswer={onAnswer}
          example={example!}
          operator={operators[2]}
          userAnswer={userAnswer}
          numberOf_Task={numberOf_Task}
          displayExample={displayExample}
          showHints={showHints}
          showPlusHints={true}
          showMinusHints={false}
          refNumber={10}
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

export default RefNumber10;
