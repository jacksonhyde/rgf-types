import * as Step from './Step';

export class Config {
  path = '';
  entry = '';
  steps: {
    [key: string]: Step.Config;
  } = {};
}

export class State {
  current = '';
  history: string[] = [];
  steps: {
    [key: string]: Step.State;
  } = {};
}
