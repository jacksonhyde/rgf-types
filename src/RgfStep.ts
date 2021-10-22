import * as Field from './RgfField';

export interface Config {
  fields: string[];
  next: [
    {
      path: string;
      field: string;
      values: string[];
    }
  ];
}

export interface State {
  submitted: boolean;
  errors: {
    count: number;
    all?: Field.Error[];
  };
}