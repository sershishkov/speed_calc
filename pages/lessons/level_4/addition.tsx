import React, { useState, useEffect } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { generateExample__AddMultSub } from '../../../utils/generateExample';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseColumnAdding from '../../../components/lessons/exercises/ExerciseColumnAdding';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description1 from '../../../components/descriptions/lessons/level_4/addition/Description1';

const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
};

function Addition() {
  const [min, set__min] = useState('100000');
  const [max, set__max] = useState('999999');

  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);
  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
  } = userAnswers;

  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] = useState<generateExample__AddMultSub>();
  // const [userAnswer, set__userAnswer] = useState('');

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);

  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState<I_example_simple_Obj[]>([]);
  // const [showHints, set__showHints] = useState(true);

  const { time, start, pause, reset } = useTimer();

  useEffect(() => {
    if (displayExample) {
      const userDigit_7 = document.getElementById('userDigit_7');
      userDigit_7!.focus();
    }
  }, [displayExample]);

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
  };

  const nextTask = () => {
    set__example(new generateExample__AddMultSub(Number(min), Number(max)));
    set_numberOf_Task((prevState) => prevState + 1);
    const userDigit_7_Input = document.getElementById('userDigit_7');
    userDigit_7_Input!.focus();
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
  };

  const onAnswer = () => {
    const userAnswer = `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`;

    const obj = {
      example: `${example!.numberLeft} ${operators[0]} ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultAdd,
      done: +userAnswer - example!.resultAdd === 0,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);

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
        <title>Сложение</title>
        <meta name='description' content='Сложение ' />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='/lessons/level_3/two_ref_numbers'
          hrefNext='/lessons/level_4/substruction'
          time={time}
          title='Сложение'
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
          displayMin={true}
          displayMax={true}
          displayShowHints={false}
          showHints={false}
          onChangeShowHints={() => {}}
        />

        <ExerciseColumnAdding
          displayExample={displayExample}
          example={example!}
          onChangeUserAnswers={onChangeUserAnswers}
          userDigit_1={userDigit_1}
          userDigit_2={userDigit_2}
          userDigit_3={userDigit_3}
          userDigit_4={userDigit_4}
          userDigit_5={userDigit_5}
          userDigit_6={userDigit_6}
          userDigit_7={userDigit_7}
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
          onStopExercise={onStopExercise}
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

export default Addition;
