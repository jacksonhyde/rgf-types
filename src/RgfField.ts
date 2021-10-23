export class Config {
  type = '';
  group = '';
  format?: string;
  options?: string[];
}

export class Error {
  message = '';
}

export class State {
  value: {
    [key: string]: string;
  } = {};
  formatted?: string = '';
  errors: Error[] = [];
  group = '';
}
