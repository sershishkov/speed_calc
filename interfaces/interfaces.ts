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

export interface I_ExampleStarOrDot_Level_7 {
  digit: number | string;
  isStar: boolean;
  isDot: boolean;
  color?: string;
  dots?: string;
}
