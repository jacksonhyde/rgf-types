import * as Field from './Field';

export class Config {
  fields: string[] = [];
  next: [
    {
      path: string;
      fields?: {};
      values?: string[];
    }
  ] = [
    {
      path: '',
    },
  ];
}

export class State {
  submitted = false;
  errors: {
    count: number;
    all?: Field.Error[];
  } = {count: 0};
  fields: {
    [key: string]: Field.State;
  } = {};
}
