import { BaseTaskData } from "../engine/task/task.types"

export type FillBlankData = BaseTaskData & {
  text: string;
  answers: string[];
};

export type MultipleChoiceData = BaseTaskData & {
  question: string;
  options: string[];
  correctIndex: number;
};

export type MathData = BaseTaskData & {
  expression: string;
  answer: number;
};