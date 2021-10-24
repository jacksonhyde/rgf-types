export class Config {
  type = '';
  group = '';
  format?: string;
  options?: string[];
}

export class Error {
  key = '';

  constructor(key: string) {
    this.key = key;
  }
}

export class State {
  value: {
    [key: string]: string;
  } = {};
  formatted?: string = '';
  errors: Error[] = [];
  group = '';
  step = '';
}
