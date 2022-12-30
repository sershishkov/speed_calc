import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import Head from 'next/head';

import { generateExample__ForCheckMultiplication } from '../../../utils/generateExample';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseCheck from '../../../components/lessons/exercises/ExerciseCheck';
import ReportOnlyCheck from '../../../components/lessons/reports/ReportOnlyCheck';

import { I_example_CheckAnswer_Obj } from '../../../interfaces/interfaces';

import Grid from '@mui/material/Grid';

import Description from '../../../components/descriptions/lessons/level_2/checkingAnswers/Description';

function CheckingAnswers() {
  const [min, set__min] = useState('101');
  const [max, set__max] = useState('999');
  const [examplesNumber, set__examplesNumber] = useState('10');
  const [example, set__example] =
    useState<generateExample__ForCheckMultiplication>();
  const [userAnswer_CheckNumberLeft, set__userAnswer_CheckNumberLeft] =
    useState('');
  const [userAnswer_CheckNumberRight, set__userAnswer_CheckNumberRight] =
    useState('');
  const [userAnswer_CheckResultLeft, set__userAnswer_CheckResultLeft] =
    useState('');
  const [userAnswer_CheckResultRight, set__userAnswer_CheckResultRight] =
    useState('');
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);

  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState<I_example_CheckAnswer_Obj[]>(
    []
  );

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
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const nextTask = () => {
    set__example(
      new generateExample__ForCheckMultiplication(Number(min), Number(max))
    );
    set_numberOf_Task((prevState) => prevState + 1);
    const userAnswer_CheckNumberLeftInput = document.getElementById(
      'userAnswer_CheckNumberLeft'
    );
    userAnswer_CheckNumberLeftInput!.focus();
  };
  const onContinue = () => {
    nextTask();

    reset();
    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__resultsList([]);
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const onAnswer = () => {
    const obj = {
      example: `${example!.numberLeft} ${operators[2]} ${
        example!.numberRight
      } ${operators[4]} ${example!.resultRight} `,

      userAnswer_CheckNumberLeft,
      userAnswer_CheckNumberRight,
      userAnswer_CheckResultLeft,
      userAnswer_CheckResultRight,

      checkNumberLeft: example!.checkNumberLeft,
      checkNumberRight: example!.checkNumberRight,
      checkResultLeft: example!.checkResultLeft,
      checkResultRight: example!.checkResultRight,

      doneCheck:
        +userAnswer_CheckNumberLeft === example!.checkNumberLeft &&
        +userAnswer_CheckNumberRight === example!.checkNumberRight &&
        +userAnswer_CheckResultLeft === example!.checkResultLeft &&
        +userAnswer_CheckResultRight === example!.checkResultRight,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');

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
        <title>Проверка ответов</title>
        <meta name='description' content='Проверка ответов ' />
      </Head>
      <Grid container direction='column'>
        <Header
          hrefPrev='//lessons/level_2/ref_number_100_mix'
          hrefNext='/lessons/level_3/ref_number_20'
          time={time}
          title='Проверка ответов'
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
          displayShowHints={false}
          showHints={false}
          onChangeShowHints={() => {}}
        />

        <ExerciseCheck
          displayExample={displayExample}
          onStopExercise={onStopExercise}
          example={example!}
          operator={operators[2]}
          userAnswer_CheckNumberLeft={userAnswer_CheckNumberLeft}
          userAnswer_CheckNumberRight={userAnswer_CheckNumberRight}
          userAnswer_CheckResultLeft={userAnswer_CheckResultLeft}
          userAnswer_CheckResultRight={userAnswer_CheckResultRight}
          setAnswer_CheckNumberLeft={(e) =>
            set__userAnswer_CheckNumberLeft(e.target.value)
          }
          setAnswer_CheckNumberRight={(e) =>
            set__userAnswer_CheckNumberRight(e.target.value)
          }
          setAnswer_CheckResultLeft={(e) =>
            set__userAnswer_CheckResultLeft(e.target.value)
          }
          setAnswer_CheckResultRight={(e) =>
            set__userAnswer_CheckResultRight(e.target.value)
          }
          onAnswer={onAnswer}
          numberOf_Task={numberOf_Task}
        />

        <ReportOnlyCheck
          displayStatistics={displayStatistics}
          resultsList={resultsList}
          onContinue={onContinue}
        />
      </Grid>
    </>
  );
}

export default CheckingAnswers;
