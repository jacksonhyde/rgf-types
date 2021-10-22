import * as RgfStep from "./RgfStep";

export interface Config {
  path: string;
  start: string;
  steps: RgfStep.Config[];
}

export interface State {
  current: string;
  history: string[];
  steps: {
    [key: string]: RgfStep.State
  }
}