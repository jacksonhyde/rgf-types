export class Config {
  [key: string]: string;
}

export class Error {
  field = '';
  key = '';

  constructor(field: string, key: string) {
    this.field = field;
    this.key = key;
  }
}

export class State {
  data: {
    [key: string]: string;
  } = {};
  value = '';
  formatted?: string = '';
  errors: Error[] = [];
  group = '';
  step = '';
}
