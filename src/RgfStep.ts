import * as Field from './RgfField';

export class Config {
  fields: string[] = [];
  next: [
    {
      path: string;
      fields: {};
      values: {};
    }
  ] = [
    {
      path: '',
      fields: {},
      values: {},
    },
  ];
}

export class State {
  submitted = false;
  errors: {
    count: number;
    all?: Field.Error[];
  } = {count: 0};
}
