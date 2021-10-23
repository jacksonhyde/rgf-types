import * as Step from './Step';

export class Config {
  path = '';
  start = '';
  steps: {
    [key: string]: Step.Config;
  } = {};
}

export class State {
  current = '';
  history: string[] = [];
  steps: {
    [key: string]: string;
  } = {};
}
