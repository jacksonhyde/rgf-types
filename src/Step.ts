import * as Field from './Field';

export class Config {
  fields: string[] = [];
  next: Array<{
    path: string;
    field?: string;
    values?: string[];
  }> = [
    {
      path: '',
    },
  ];
}

export class State {
  submitted = false;
  errors: Field.Error[] = [];
  fields: string[] = [];
}
