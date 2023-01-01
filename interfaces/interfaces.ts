export interface I_descr_CheckTable {
  numberLeft: number;
  operator: string;
  numberRight: number;
  valueResult: number;
  checkLeft: number;
  checkRight: number;
  checkSumLeft: number;
  checkResult: number;
  displayRowTotal: boolean;
}

export interface I_descr_ExampleTableMult {
  hintPlusLeft: string;
  hintPlusRight: string;
  refNumber: string;
  numberLeft: string;
  numberRight: string;
  valueIntermediate: string;
  hintMinusLeft: string;
  hintMinusRight: string;
  valueToAdd: string;
  valueToMinus: string;
  valueResult: string;
  displayRowPlusHits: boolean;
  displayRowMinusHints: boolean;
  displayRowResults: boolean;
}

export interface I_example_simple_Obj {
  example: string;
  userAnswer: string;
  rightAnswer: number;
  done: boolean;
}

export interface I_example_CheckAnswer_Obj {
  example: string;
  userAnswer_CheckNumberLeft: string;
  userAnswer_CheckNumberRight: string;
  userAnswer_CheckResultLeft: string;
  userAnswer_CheckResultRight: string;

  checkNumberLeft: number;
  checkNumberRight: number;
  checkResultLeft: number;
  checkResultRight: number;

  doneCheck: boolean;
}

export interface I_exampleSimple_and_CheckAnswer_Obj {
  example: string;

  userAnswer: string;
  userAnswer_CheckNumberLeft: string;
  userAnswer_CheckNumberRight: string;
  userAnswer_CheckResultLeft: string;
  userAnswer_CheckResultRight: string;

  resultRight: number;
  checkNumberLeft: number;
  checkNumberRight: number;
  checkResultLeft: number;
  checkResultRight: number;

  doneExample: boolean;
  doneCheck: boolean;
  doneExcercise: boolean;
}

export interface I_ExampleStarOrDot_Level_7 {
  digit: number | string;
  isStar: boolean;
  isDot: boolean;
  color?: string;
  dots?: string;
}
