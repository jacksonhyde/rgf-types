import * as Step from './RgfStep';

export class Config {
  path = '';
  start = '';
  steps: Step.Config[] = [];
}

export class State {
  current = '';
  history: string[] = [];
  steps: {
    [key: string]: string;
  } = {};
}
