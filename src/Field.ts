export class Config {
  type = '';
  field = '';
  group? = '';
  format?: string;
  enum?: string[];
  [key: string]: any;
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
