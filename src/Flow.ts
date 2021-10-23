import * as Step from './Step';

export class Config {
  path = '';
  entry = '';
  steps: {
    [key: string]: Step.Config;
  } = {};
}

export class State {
  status: {
    submitted: boolean;
    id: string;
  } = {
    submitted: false,
    id: '',
  };
  current = '';
  history: string[] = [];
  steps: {
    [key: string]: Step.State;
  } = {};
}
